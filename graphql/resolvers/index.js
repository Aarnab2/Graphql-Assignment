const userResolvers = require('./user')
const postResolvers = require('./post')
const commentResolvers = require('./comment')

const rootResolvers = {
    ...userResolvers,
    ...postResolvers,
    ...commentResolvers
}

module.exports = rootResolvers