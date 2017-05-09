import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Tweets extends Component {
  render () {
    const { tweets } = this.props 
    return (
      <div>
        {tweets.map((tweet, index) => {
          return <div key={index}>{tweet.content}</div>
        })}
      </div>
    )
  }
}

Tweets.defaultProps = {
  tweets: [
    { content: 'tweet 1' },
    { content: 'tweet 2' }
  ]
}

Tweets.propTypes = {
  tweets: PropTypes.arrayOf(PropTypes.shape({
    content: PropTypes.string.isRequired
  }))
}

export default Tweets
