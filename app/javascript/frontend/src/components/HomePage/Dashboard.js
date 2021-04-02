import React, { Component } from 'react'

export default class Dashboard extends Component {
    render() {
        return (
            <div>
                <h2>Dashboard</h2>
                <h2>Status: {this.props.loggedInStatus}</h2>
            </div>
        )
    }
}
