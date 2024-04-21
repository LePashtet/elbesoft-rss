const {Router} = require('express');
const Joi = require("joi");

const newsletterController = require('../../controllers/newsletter');
const {objectId} = require('../../validation/index');
const validate = require('../../middlewares/validate');

const router = Router();

router.get('/', newsletterController.getAllNewsletter);

router.post('/', validate({
    body: Joi.object().keys({
        time: Joi.string().required(),
        location: Joi.string(),
        email: Joi.string().email({tlds: {allow: false}}).required(),
        sources: Joi.array().required()
    }),
}), newsletterController.createNewsletter);
router.delete('/:id', validate({
    params: Joi.object().keys({
        id: objectId.required()
    }),
}), newsletterController.deleteNewsletterById);

module.exports = router;
