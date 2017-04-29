import {
  GraphQLObjectType,
  GraphQLID,
  GraphQLInt,
  GraphQLList
} from 'graphql'

import UserType from './UserType'
import TweetType from './TweetType'

import UserModel from '../models/user'
import TweetModel from '../models/tweet'

var QueryType = new GraphQLObjectType({
  name: 'Query',
  fields () {
    return {
      users: {
        type: new GraphQLList(UserType),
        args: {
          id: {
            type: GraphQLID
          },
          limit: {
            type: GraphQLInt
          }
        },
        resolve (parent, {id, limit}) {
          let result

          if (id) {
            result = UserModel.getById(id)
          } else {
            result = UserModel.all()
          }

          if (limit) {
            result.limit(limit)
          }

          return result
        }
      },
      tweets: {
        type: new GraphQLList(TweetType),
        resolve () {
          return TweetModel.all()
        }
      }
    }
  }
})

export default QueryType
