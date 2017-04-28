import db from '../db.js'

class User {
  static all () {
    return db.select().table('user')
  }
}

export default User