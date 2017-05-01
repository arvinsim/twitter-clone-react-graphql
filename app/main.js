import ReactDOM from 'react-dom'
import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

const Home = () => (
  <div>
    <h2>Home</h2>
    <p>Hello! This is the Twitter clone project using React, Relay and Redux</p>
  </div>
)

const About = () => (
  <div>
    <h2>About</h2>
    <p>What about it?</p>
  </div>
)

const BasicExample = () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>

      <hr/>

      <Route exact path="/" component={Home}/>
      <Route path="/about" component={About}/>
    </div>
  </Router>
)

ReactDOM.render(
  <BasicExample />,
  document.getElementById('root')
)
