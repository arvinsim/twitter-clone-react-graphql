import knex from 'knex'

const db = knex({
  client: 'sqlite3',
  connection: {
    filename: './db/twitter.sqlite'
  },
  useNullAsDefault: false
})

export default db
