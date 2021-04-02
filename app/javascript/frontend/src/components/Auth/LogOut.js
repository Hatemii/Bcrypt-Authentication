import React, { Component } from 'react'

export default class LogOut extends Component {


    handleLogOut = () => {
        console.log("Logout: true")
    }

    render() {
        return (
            <div>
                <button onClick={this.handleLogOut()}>Log Out</button>
            </div>
        )
    }
}
