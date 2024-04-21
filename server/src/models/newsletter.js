const mongoose = require('mongoose');

const {Schema} = mongoose;

const NewsLetterSchema = new Schema(
    {
        user: {
            type: Schema.Types.ObjectId,
            ref: 'user',
            required: true
        },
        sources: [{
            type: Schema.Types.ObjectId,
            ref: 'sources',
            required: true
        }],
        time: {
            type: String,
            required: true,
        },
        location: {
            type: String,
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
