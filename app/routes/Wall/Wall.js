import React, { Component } from 'react'

const Profile = () => (
  <div>Profile</div>
)

const Trends = () => (
  <div>Trends</div>
)

const Sidebar = () => (
  <div>
    <Profile />
    <Trends />
  </div>
)

const Tweets = () => (
  <div>Tweets</div>
)

const WhoToFollow = () => (
  <div>WhoToFollow</div>
)

class Wall extends Component {
  render () {
    return (
      <div>
        <Sidebar />
        <Tweets />
        <WhoToFollow />
      </div>
    )
  }
}

export default Wall
