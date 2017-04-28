import {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLList,
  GraphQLNonNull
} from 'graphql'

import TweetType from './TweetType'
import TweetModel from '../models/tweet.js'
import FollowerModel from '../models/follower.js'

const UserType = new GraphQLObjectType({
  name: 'users',
  description: 'Represents the users in the twitter app',
  fields: () => {
    return {
      id: {
        type: new GraphQLNonNull(GraphQLID)
      },
      username: {
        type: new GraphQLNonNull(GraphQLString)
      },
      tweets: {
        type: new GraphQLList(TweetType),
        resolve (user) {
          return TweetModel.getByUser(user.id)
        }
      },
      followers: {
        type: new GraphQLList(UserType),
        resolve (user) {
          return FollowerModel.getFollowers(user.id)
        }
      }
    }
  }
})

export default UserType
