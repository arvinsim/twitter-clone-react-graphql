import { buildSchema } from 'graphql'

export const UserSchema = buildSchema(`
  type User {
    id: ID!
    username: String!
  }

  type Query {
    users: User
    hello: String
  }
`)

// The root provides a resolver function for each API endpoint
export const rootResolver = {
  hello: () => {
    return 'Hello world!'
  }
} 
