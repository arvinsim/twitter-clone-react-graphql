import db from '../db.js'

class User {
  static all () {
    return db.select().table('user')
  }

  static getById (userId) {
    return db.select().from('user').where('id', userId)
  }
}

export default User
