import React, { Component } from 'react'

export default class LogOut extends Component {


    handleLogOut = () => { }

    render() {
        return (
            <div>
                <button onClick={this.handleLogOut()}>Log Out</button>
            </div>
        )
    }
}
