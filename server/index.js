import express from 'express'
import graphqlHTTP from 'express-graphql'
import { UserSchema, rootResolver } from '../schemas/user'

const app = express()

app.get('/', (req, res) => {
  res.send('Hello! This is the Twitter clone project using React, Relay and Redux')
})

app.use('/graphql', graphqlHTTP({
  schema: UserSchema,
  rootValue: rootResolver,
  graphiql: true
}))

app.listen(5000)
console.log('Running GraphQL API server at localhost:5000/graphql')
