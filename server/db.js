import knex from 'knex'

const db = knex({
  client: 'sqlite3',
  connection: {
    filename: './db/twitter.sqlite'
  }
})

export default db
