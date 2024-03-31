const mongoose = require('mongoose');

const {Schema} = mongoose;

const NewsLetterSchema = new Schema(
    {
        user: {
            type: Schema.Types.ObjectId,
            ref: 'user'
        },
        sources: [{
            type: String,
            required: true,
        }],
        time: {
            type: Date,
            required: true,
        },
        location: {
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
