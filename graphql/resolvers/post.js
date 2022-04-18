const Post = require('../../models/post')
const { transformPost } = require('./transform_methods')

module.exports = {
    createPost: async (args) => {
        try {
            console.log("here...", args.inputPost)
            const post = await Post.create({ ...args.inputPost, creator: '625c14266551469a699e45fb' })//args.inputPost.userId
            console.log("Post ", post)
            return transformPost(post)
        } catch (e) {
            console.log(e.message)
        }
    },
    getPosts: async (args) => {
        try {
            const postTypes = args.postTypes
            const postTypesArr = postTypes.split(" ")
            //console.log("arr ", postTypesArr)
            const filteredPosts = await Post.find({ postType: { $in: postTypesArr } })
            //console.log("filteredPosts ", filteredPosts)
            // extra array
            const filter = []
            let obj = {}
            filteredPosts.forEach(post => {
                if (obj[post.postType])
                    obj[post.postType] = obj[post.postType] + 1
                else
                    obj[post.postType] = 1
            })
            console.log("obj  ", obj)
            for (const prop in obj) {
                let e = {}
                e.name = prop
                e.count = obj[prop]
                filter.push(e)
            }
            console.log("filter  ", filter)
            // extra array

            const postsArray = filteredPosts.map(post => transformPost(post))
            let postOuputObj = {}
            postOuputObj.filter = filter
            postOuputObj.posts = postsArray
            return postOuputObj
        } catch (e) {
            console.log(e.message)
        }
    }
}