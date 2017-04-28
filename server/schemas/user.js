import { buildSchema } from 'graphql'

import UserModel from '../models/user.js'
import TweetModel from '../models/tweet.js'

export const QuerySchema = buildSchema(`
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
export const QueryResolver = {
  hello: () => {
    return 'Hello world!'
  },
  users: () => {
    return UserModel.all()
  },
  tweets: () => {
    return TweetModel.all()
  }
} 

