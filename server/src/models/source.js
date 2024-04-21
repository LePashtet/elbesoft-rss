const mongoose = require('mongoose');

const {Schema} = mongoose;

const NewsLetterSchema = new Schema(
    {
        link: {
            type: String,
            required: true,
        },
        keywords: [{
            type: String
        }],
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

module.exports = mongoose.model('sources', NewsLetterSchema);
