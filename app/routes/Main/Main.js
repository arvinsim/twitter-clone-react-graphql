import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import Home from '../Home'
import Wall from '../Wall'

class Main extends Component {
  render () {
    return (
      <Router>
        <div>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/wall">Wall</Link></li>
          </ul>

          <hr />

          <div>
            <Route exact path="/" component={Home} />
            <Route path="/wall" component={Wall} />
          </div>

          <div>Sample Footer</div>
        </div>
      </Router>
    )
  }
}

export default Main
