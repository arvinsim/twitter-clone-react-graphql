import db from '../db.js'

class Tweet {
  static all () {
    return db.select().table('tweet')
  }
}

export default Tweet