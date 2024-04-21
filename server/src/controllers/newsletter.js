const catchAsync = require('../middlewares/catchAsync');

function toDto(newsletter) {
    const {
        id, user, sources, time, location, createdAt, updatedAt
    } = newsletter;

    return {
        id, user, sources, time, location, createdAt, updatedAt
    };
}

const NewsletterModel = require('../models/newsletter');
const SourceModel = require('../models/source');
const UserModel = require('../models/user');
const logger = require("../config/logger");

const getAllNewsletter = catchAsync(async (req, res) => {
    const result = await NewsletterModel.find();

        res.status(200).json({success: true, newsletter: result?.map(item => toDto(item)) || []});
});

const createNewsletter = catchAsync(async (req, res) => {
    const sourceIds = await SourceModel.insertMany(req.body.sources).then(function (docs) {
        return docs.map(item => item._id)
    })
        .catch(function (err) {
            logger.error(err);
            res.status(500).send(err);
        });
    let user = await UserModel.find({email: req.body.email})
    if (!user.length) {
        user = await UserModel.create({email: req.body.email})
    }
    const result = await NewsletterModel.create({
        user: user[0]._id,
        sources: sourceIds,
        time: req.body.time,
        location: req.body.location
    })
    console.log(result)

    try {
        await UserModel.findOneAndUpdate(
            {_id: result.user},
            {$push: {newsletters: result._id}}
        );

        res.status(201).json({
            success: true,
        });
    } catch (error) {
        logger.error(error)
        res.status(500).json({
            success: false,
            message: error,
        });
    }


});


const deleteNewsletterById = catchAsync(async (req, res) => {
    const result = await NewsletterModel.deleteOne({_id: req.params.id})
    if (!result.deletedCount) {
        return res.status(404).json({
            success: false,
            error: "Newsletter not found"
        });
    }

    res.status(200).json({
        success: true,
    });
});

module.exports = {
    getAllNewsletter,
    createNewsletter,
    deleteNewsletterById,
};
