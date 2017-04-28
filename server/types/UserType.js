import {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLList,
  GraphQLNonNull
} from 'graphql'

import TweetType from './TweetType'

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
        type: new GraphQLList(TweetType)
      },
      followers: {
        type: new GraphQLList(UserType)
      }
    }
  }
})

export default UserType
