const mongoose = require('mongoose')
const Schema = mongoose.Schema

const PostSchema = new Schema({
    creator: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    postTitle: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    postType: {
        type: String,
        required: true
    },   //( String : typescript / react / node js / php / python ) like category
    postStatus: {
        type: String,
        default: "draft"
    },
    comments: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Comment'
        }
    ]
})

module.exports = mongoose.model('Post', PostSchema)

