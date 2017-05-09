import React, { Component } from 'react'

const Blurb = () => (
  <div>
    <h1>Welcome to Twitter Clone.</h1>

    <p>Connect with your friends — and other fascinating people. Get in-the-moment updates on the things that interest you. And watch events unfold, in real time, from every angle.</p>
  </div>
)

const Authentication = () => (
  <div>
    <form action="">
      <input type="text" placeholder="Phone, Email and Username" />
      <input type="password" placeholder="Password" />
      <button>Log In</button>
    </form>

    <form action="">
      <input type="text" placeholder="Full Name" />
      <input type="text" placeholder="Email" />
      <input type="text" placeholder="Password" />
      <button>Sign Up</button>
    </form>
  </div>
)

class Home extends Component {
  render () {
    return (
      <div>
        <h2>Home</h2>
        <Blurb />
        <Authentication />
      </div>
    )
  }
}

export default Home
