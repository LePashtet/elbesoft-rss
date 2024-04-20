const UserModel = require("../models/user")
const NewsletterModel = require("../models/newsletter")
const SourceModel = require("../models/source")
const logger = require("../config/logger");
const {generateInstagram} = require("../utils/rss/instagram");
const completeEmail = require("../utils/email/script");
const {sendEmail} = require("./mailer");
const {getTweetsbyUsername} = require("../utils/rss/x");


const createUserNewsletter = async () => {
    const result = await NewsletterModel.find({time: "16"}).exec(); //new Date().getHours().toString()
    if (result) {
        for (let i = 0; i < result.length; i++) {
            const email = await UserModel.findById(result[i].user).then(res => res.email)
            const sources = await SourceModel.find().where('_id').in(result[i].sources).then(item => {
                return Promise.all(item.map(async source => {
                    return await generateSource(source)
                }))
            })

            const content = completeEmail(sources.flat(1))

            sendEmail(email, "Daily News", content)
        }

    } else {
        logger.error('UserNewsletter creation failed ' + result, result);
    }
};

const generateSource = async ({type, keywords, link}) => {
    switch (type) {
        case "instagram":
            return await generateInstagram(link)
        case "x":
            return await getTweetsbyUsername(link)
        default:
            return null
    }
}

module.exports = createUserNewsletter;
