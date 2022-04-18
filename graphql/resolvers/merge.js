const User = require('../../models/user')
const Post = require('../../models/post')
const Comment = require('../../models/comment')
//const { transformComment } = require('./transform_methods')

const transformComment = comment => {
    return {
        ...comment._doc,
        post: findPost.bind(this, comment.postId),
        creator: findUser.bind(this, comment.creator)
    }
}

const findUser = async (userId) => {
    console.log("userId ", userId)
    const user = await User.findById(userId)
    return user._doc
}

const findPost = async (postId) => {
    console.log("postId ", postId)
    const post = await Post.findById(postId)
    return post._doc
}

const findComments = async (commentIds) => {
    console.log("commentIds ", commentIds)
    if (commentIds.length == 0)
        return []
    const comments = await Comment.find({ _id: { $in: commentIds } })
    console.log("comments ", comments)
    return comments.map(comment => transformComment(comment))
}

module.exports = {
    findUser,
    findPost,
    findComments
}