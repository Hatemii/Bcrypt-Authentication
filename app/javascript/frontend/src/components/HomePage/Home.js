import React, { Component } from 'react'
import LogIn from '../Auth/LogIn';
import SignUp from '../Auth/SignUp'

export default class Home extends Component {
    constructor(props) {
        super(props);

        this.handleSuccessfulAuth = this.handleSuccessfulAuth.bind(this)
    }


    handleSuccessfulAuth(data) {
        this.props.handleLogin(data)
        this.props.history.push("/dashboard")
    }

    render() {
        return (
            <div>
                <h2>Status: {this.props.loggedInStatus}</h2>
                <SignUp handleSuccessfulAuth={this.handleSuccessfulAuth} />
                <LogIn handleSuccessfulAuth={this.handleSuccessfulAuth} />
            </div>
        )
    }
}
