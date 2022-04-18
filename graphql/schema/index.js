const { buildSchema } = require('graphql')

module.exports = buildSchema(`
type User{
    _id: ID!
    username: String!
    email: String!
}

type Post{
    _id: ID!
    postTitle: String!
    description: String!
    postType: String!
    postStatus: String!
    creator: User!
    comments: [Comment!]
}

type Comment{
    _id: ID!
    commentStatus: String!
    comments: String!
    likesCount: Int
    post: Post!
    creator: User!
}

type FilterObj {
    name: String
    count: Int
}

type PostOutput {
    filter: [FilterObj!]
    posts: [Post!]
}

input UserInput{
    username: String!
    email: String!
}

input PostInput{
    postTitle: String!
    description: String!
    postType: String!
    postStatus: String!
}

input CommentInput{
    postId: String!
    commentStatus: String!
    comments: String!
    likesCount: Int
}

type RootQuery {
 getPosts(postTypes:String!): PostOutput
}

type RootMutation {
createUser(inputUser:UserInput): User
createPost(inputPost:PostInput): Post
createComment(inputComment:CommentInput): Comment
deletePostById(postId:String!): Post
updatePostById(postId:String,postTitle:String): Post
}

schema {
query: RootQuery
mutation: RootMutation
}
`)