const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database(`./db/twitter.sqlite`, sqlite3.OPEN_CREATE | sqlite3.OPEN_READWRITE)

db.serialize(() => {
  db.run('DROP TABLE IF EXISTS user')

  // Create User table
  db.run(`
  CREATE TABLE user (
    id INTEGER PRIMARY KEY,
    username VARCHAR(255)
  )
  `)

  // Create Tweet table
  db.run('DROP TABLE IF EXISTS tweet')
  db.run(`
  CREATE TABLE tweet (
    id INTEGER PRIMARY KEY,
    user_id INTEGER,
    timestamp INTEGER,
    content VARCHAR(140),
    FOREIGN KEY(user_id) REFERENCES user(id)
  )
  `)

  // Create Follower table
  db.run('DROP TABLE IF EXISTS follower')
  db.run(`
  CREATE TABLE follower (
    id INTEGER PRIMARY KEY,
    subject_id INTEGER,
    follower_id INTEGER,
    FOREIGN KEY(subject_id) REFERENCES user(id),
    FOREIGN KEY(follower_id) REFERENCES user(id)
  )
  `)
})

db.close()