import ReactDOM from 'react-dom'
import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import Home from './components/Home'
import Users from './components/Users'
import Tweets from './components/Tweets'

const BasicExample = () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/users">Users</Link></li>
        <li><Link to="/tweets">Tweets</Link></li>
      </ul>

      <hr/>

      <div>
        <Route exact path="/" component={Home}/>
        <Route path="/users" component={Users}/>
        <Route path="/tweets" component={Tweets}/>
      </div>

      <div>Sample Footer</div>
    </div>
  </Router>
)

ReactDOM.render(
  <BasicExample />,
  document.getElementById('root')
)
