import express from 'express'
import graphqlHTTP from 'express-graphql'
import QuerySchema from './schemas/query'
import compress from 'compression'

import path from 'path'
import webpack from 'webpack'
import webpackMiddleware from 'webpack-dev-middleware'
import webpackConfig from '../webpack.config.js'

const debug = require('debug')('app:server')

const app = express()

// Apply gzip compression
app.use(compress())

// ------------------------------------
// Apply Webpack HMR Middleware
// ------------------------------------
if (process.env.NODE_ENV === 'development') {
  const compiler = webpack(webpackConfig)

  debug('Enabling webpack dev and HMR middleware')
  app.use(webpackMiddleware(compiler, {
    publicPath: webpackConfig.output.publicPath,
    contentBase: '',
    hot: true,
    lazy: false
  }))
  app.use(require('webpack-hot-middleware')(compiler, {
    path: '/__webpack_hmr'
  }))

  // GraphQL Endpoint
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

  // This rewrites all routes requests to the root /index.html file
  // (ignoring file requests). If you want to implement universal
  // rendering, you'll want to remove this middleware.
  app.use('*', function (req, res, next) {
    const filename = path.join(compiler.outputPath, 'index.html')
    compiler.outputFileSystem.readFile(filename, (err, result) => {
      if (err) {
        return next(err)
      }
      res.set('content-type', 'text/html')
      res.send(result)
      res.end()
    })
  })
}

app.listen(5000)
debug('Running GraphQL API server at localhost:5000/graphql')
