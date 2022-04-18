const { findUser, findPost, findComments } = require('./merge')

const transformComment = comment => {
    return {
        ...comment._doc,
        post: findPost.bind(this, comment.postId),
        creator: findUser.bind(this, comment.creator)
    }
}

const transformPost = post => {
    // console.log("### ", post.creator)
    return {
        ...post._doc,
        creator: findUser.bind(this, post.creator),
        comments: findComments.bind(this, post.comments)
    }
}



module.exports = {
    transformComment,
    transformPost
}