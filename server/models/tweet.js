import db from '../db.js'

class TweetModel {
  static all () {
    return db.select().table('tweet')
  }

  static getByUser (userId) {
    return db('tweet').select().where('user_id', userId)
  }
}

export default TweetModel
