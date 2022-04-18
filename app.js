require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')


const graphqlSchema = require('./graphql/schema/index')
const graphqlResolvers = require('./graphql/resolvers/index')

const { graphqlHTTP } = require('express-graphql')


const app = express()

app.use(bodyParser.json())


app.use('/graphql', graphqlHTTP({
    schema: graphqlSchema,
    rootValue: graphqlResolvers,
    graphiql: true
}))

//mongodb+srv://Graphql-test:<password>@graphql-test.ogybg.mongodb.net/graphqlTest?retryWrites=true&w=majority

mongoose.connect(`mongodb+srv://${process.env.MONGO_USER}:${encodeURIComponent(process.env.MONGO_PASSWORD)}@${process.env.MONGO_DB}.ogybg.mongodb.net/graphql-test?retryWrites=true&w=majority`)
    .then(() => {
        console.log("connected to Database successfully!")
    })
    .catch(e => console.log(e.message))

const PORT = process.env.PORT || 4000
app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`)
})