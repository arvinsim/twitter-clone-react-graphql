import {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLInt,
  GraphQLNonNull
} from 'graphql'

import UserType from './UserType'

const TweetType = new GraphQLObjectType({
  name: 'tweets',
  description: 'Represents the tweets in the twitter app',
  fields: () => {
    return {
      id: {
        type: new GraphQLNonNull(GraphQLID)
      },
      user: {
        type: new GraphQLNonNull(UserType)
      },
      content: {
        type: new GraphQLNonNull(GraphQLString)
      },
      timestamp: {
        type: new GraphQLNonNull(GraphQLInt)
      }
    }
  }
})

export default TweetType
