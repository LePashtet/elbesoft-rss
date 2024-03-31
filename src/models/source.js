const mongoose = require('mongoose');

const {Schema} = mongoose;

const NewsLetterSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        categories: {
            type: Date,
            required: true,
        },
        type: {
            type: String,
            required: true,
        },
        createdAt: {
            type: Date,
            default: Date.now,
        },
        updatedAt: Date,
    },
    {optimisticConcurrency: true},
);

module.exports = mongoose.model('newsletter', NewsLetterSchema);
