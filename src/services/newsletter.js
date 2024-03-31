const UserModel = require("../models/user")
const NewsletterModel = require("../models/newsletter")
const catchAsync = require("../middlewares/catchAsync");
const logger = require("../config/logger");


const createUserNewsletter = catchAsync(async (req, res) => {
    const result = await NewsletterModel.find().exec();
    const dataNow = Date.now()

    if (result) {
        result.forEach(item => {
            if (dataNow.getHours() === item.time){

            }
        })

    } else {
        logger.error('UserNewsletter creation failed ' + result, result);
    }
});
