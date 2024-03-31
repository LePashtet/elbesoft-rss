const catchAsync = require('../middlewares/catchAsync');

function toDto(newsletter) {
    const {
        id, name, description, status, createdAt, updatedAt,
    } = newsletter;

    return {
        id,
        name,
        description,
        status,
        createdAt,
        updatedAt,
    };
}

const NewsletterModel = require('../models/newsletter');

const getAllNewsletter =  catchAsync(async (req, res) => {
    const result = await NewsletterModel.find().exec();

    if (result) {
        res.status(200).json({success: true, newsletter: result.map(item => toDto(item))});
    } else {
        res.status(404).json({success: false, error: 'tasks not found'});
    }
});

const createNewsletter = catchAsync(async (req, res) => {
    const result = await NewsletterModel.create(req.body.user, req.body.time, req.body.location, req.body.sources);

    res.status(201).json({
        success: true,
        task: toDto(result),
    });
});


const deleteNewsletterById = catchAsync(async (req, res) => {
    const result = await NewsletterModel.deleteOne({id: req.params.id})
    if (result.error) {
        res.status(500).json({
            success: true,
            error: result.error
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
