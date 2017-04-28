import faker from 'faker'

// Helper function
const getRandomIntInclusive = (min, max) => {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}

const knex = require('knex')({
  client: 'sqlite3',
  connection: {
    filename: `./db/twitter.sqlite`
  }
})

const users = []
for (let i = 0; i < 10; i++) {
  users.push({
    username: faker.internet.userName()
  })
}
knex.insert(users).into('user')
  .then(() => console.log('users inserted successfully'))
  .catch((error) => console.log('error when inserting users', error))

knex.select('id').from('user')
  .then((users) => {
    const tweets = []

    users.map((user) => {
      const numberOfTweets = getRandomIntInclusive(3, 7)
      for (let i = 0; i < numberOfTweets; i++) {
        tweets.push({
          user_id: user.id,
          content: faker.lorem.sentence(),
          timestamp: faker.date.recent()
        })
      }
    })

    knex.insert(tweets).into('tweet')
    .then(() => console.log('tweets inserted successfully'))
    .catch((error) => console.log('error when inserting tweets', error))
  })
  .catch((error) => console.log('error when selecting users for tweets', error))

knex.select('id').from('user') 
  .then((users) => {
    const followers = []

    for (let i = 0; i < 10; i++) {
      const subjectId = users[Math.floor(Math.random() * users.length)].id
      const followerId = users[Math.floor(Math.random() * users.length)].id

      if (subjectId === followerId) {
        continue
      }

      followers.push({
        subject_id: subjectId,
        follower_id: followerId
      })
    }

    knex.insert(followers).into('follower')
      .then(() => console.log('followers inserted successfully'))
      .catch((error) => console.log('error when inserting followers', error))
  })
  .catch((error) => console.log('error when selecting users for followers', error))
