const User = require('../../models/user')

module.exports = {
    createUser: async (args) => {
        try {
            console.log("here...")
            const { email, username } = args.inputUser
            const userFound = await User.findOne({ email: email })

            if (userFound)
                throw new Error('user already exists!')
            else {
                const newUser = await User.create({ email, username })
                console.log("User ", newUser)
                return newUser._doc
            }
        } catch (e) {
            console.log(e.message)
        }
    }
}