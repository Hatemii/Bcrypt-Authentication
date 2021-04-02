import React, { Component } from 'react'
import Routes from './routes/Routes'


export default class App extends Component {

  // logOutHandle() {
  //   axios.delete("http://localhost:3000/logout",
  //     { withCredentials: true }
  //   ).then(res => {
  //     console.log("Log out successfully")
  //   }).catch(err => {
  //     console.log("Something went wrong", err)
  //   })
  // }

  render() {
    return (
      <div>
        <h2>TRASH APP</h2>

        {/* <button onClick={this.logOutHandle} >Log Out</button> */}

        <Routes />
      </div>
    )
  }
}
