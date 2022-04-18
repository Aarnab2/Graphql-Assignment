const Comment = require('../../models/comment')
const Post = require('../../models/post')
const { transformComment } = require('./transform_methods')

module.exports = {
    createComment: async (args) => {
        try {
            console.log("here...", args.inputComment)
            const comment = await Comment.create({ ...args.inputComment, creator: '625c14266551469a699e45fb' })//args.inputPost.userId
            console.log("Comment ", comment)
            const post = await Post.findById(args.inputComment.postId)
            post.comments.push(comment.id)
            await post.save()
            return transformComment(comment)
        } catch (e) {
            console.log(e.message)
        }
    }
}