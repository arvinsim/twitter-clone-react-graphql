import { buildSchema } from 'graphql'

export const UserSchema = buildSchema(`
  type User {
    id: ID!
    username: String!
    tweets: [Tweet]
    followers: [Follower]
  }

  type Tweet {
    id: ID!
    user_id: User!
    content: String!
    timestamp: Int
  }

  type Follower {
    id: ID!
    subject_id: User!
    follower_id: User!
  }

  type Query {
    users: [User]
    tweets: [Tweet]
    hello: String
  }
`)

// The root provides a resolver function for each API endpoint
export const rootResolver = {
  hello: () => {
    return 'Hello world!'
  },
  users: () => {
    return [
      { id: 1, username: 'qwer' },
      { id: 2, username: 'asdf' },
      { id: 3, username: 'zxcv' }
    ]
  },
  tweets: () => {
    return [
      { id: 1, user_id: 1, content: 'lasdfjlkadjsf', timestamp: 1342567411 },
      { id: 2, user_id: 2, content: 'asdfasdfasdfads', timestamp: 1342567422 },
      { id: 3, user_id: 3, content: 'zcvcxzvxzcvxzcv', timestamp: 1342567433 }
    ]
  }
} 
