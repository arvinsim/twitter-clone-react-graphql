import express from 'express'
import graphqlHTTP from 'express-graphql'
import { QuerySchema, QueryResolver } from './schemas/user'

const app = express()

app.get('/', (req, res) => {
  res.send('Hello! This is the Twitter clone project using React, Relay and Redux')
})

app.use('/graphql', graphqlHTTP({
  schema: QuerySchema,
  rootValue: QueryResolver,
  graphiql: true,
  formatError: error => ({
    message: error.message,
    locations: error.locations,
    stack: error.stack,
    path: error.path
  })
}))

app.listen(5000)
console.log('Running GraphQL API server at localhost:5000/graphql')
