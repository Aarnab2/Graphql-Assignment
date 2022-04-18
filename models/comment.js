const mongoose = require('mongoose')
const Schema = mongoose.Schema

const CommentSchema = new Schema({
    creator: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    postId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post'
    },
    commentStatus: {
        type: String,
        default: 'draft'
    },
    comments: {
        type: String,
        required: true
    },
    likesCount: {
        type: Number,
        default: 0
    }
})

module.exports = mongoose.model('Comment', CommentSchema)

