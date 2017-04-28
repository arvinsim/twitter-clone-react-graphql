import db from '../db.js'

class FollowerModel {
  static all () {
    return db.select().table('follower')
  }

  static getFollowers (userId) {
    return db.select('user.*').from('follower')
        .crossJoin('user', 'user.id', 'follower.follower_id')
        .where('follower.subject_id', userId)
  }

  static getFollowing (userId) {
    return db.select('user.*').from('follower')
        .crossJoin('user', 'user.id', 'follower.subject_id')
        .where('follower.follower_id', userId)
  }
}

export default FollowerModel
