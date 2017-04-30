import express from 'express'
import graphqlHTTP from 'express-graphql'
import QuerySchema from './schemas/query'
import compress from 'compression'

import webpack from 'webpack'
const debug = require('debug')('app:server')

const app = express()

// Apply gzip compression
app.use(compress())

// ------------------------------------
// Apply Webpack HMR Middleware
// ------------------------------------
if (process.env.NODE_ENV === 'development') {
  const compiler = webpack(require('../webpack.config.js'))

  debug('Enabling webpack dev and HMR middleware')
  app.use(require('webpack-dev-middleware')(compiler, {
    publicPath: '',
    contentBase: '',
    hot: true,
    lazy: false
  }))
  app.use(require('webpack-hot-middleware')(compiler, {
    path: '/__webpack_hmr'
  }))
}

app.get('/', (req, res) => {
  res.send('Hello! This is the Twitter clone project using React, Relay and Redux')
})

app.use('/graphql', graphqlHTTP({
  schema: QuerySchema,
  graphiql: true,
  formatError: error => ({
    message: error.message,
    locations: error.locations,
    stack: error.stack,
    path: error.path
  })
}))


app.listen(5000)
debug('Running GraphQL API server at localhost:5000/graphql')
