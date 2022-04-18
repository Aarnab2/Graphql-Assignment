const mongoose = require('mongoose')
const Schema = mongoose.Schema

const LikeSchema = new Schema({
    id: {
        type: String,
        unique: true,
        required: true
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    postId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post',
        required: true
    },
    commentId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Comment'
    },
})

module.exports = mongoose.model('Like', LikeSchema)

