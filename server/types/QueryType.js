import {
  GraphQLObjectType,
  GraphQLList
} from 'graphql'

import UserType from './UserType'
import TweetType from './TweetType'

import UserModel from '../models/user.js'
import TweetModel from '../models/tweet.js'

var QueryType = new GraphQLObjectType({
  name: 'Query',
  fields: function () {
    return {
      users: {
        type: new GraphQLList(UserType),
        resolve: function () {
          return UserModel.all()
        }
      },
      tweets: {
        type: new GraphQLList(TweetType),
        resolve: function () {
          return TweetModel.all()
        }
      }
    }
  }
})

export default QueryType
