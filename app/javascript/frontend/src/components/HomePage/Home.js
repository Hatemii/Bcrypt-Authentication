import React, { Component } from 'react'
import LogIn from '../Auth/LogIn';
import SignUp from '../Auth/SignUp'
import axios from "axios"

export default class Home extends Component {
    constructor(props) {
        super(props);

        this.handleSuccessfulAuth = this.handleSuccessfulAuth.bind(this)
        this.handleLogOutButton = this.handleLogOutButton.bind(this)
    }


    handleSuccessfulAuth(data) {
        this.props.handleLogin(data)
        this.props.history.push("/dashboard")
    }


    handleLogOutButton() {
        axios.delete("http://localhost:3000/logout", { withCredentials: true }
        ).then(res => {
            console.log("You Are Logged Out successfully")
            this.props.handleLogOut()
        }).catch(err => {
            console.log(err)
        })

        this.props.handleLogOut()
    }


    render() {
        return (
            <div>
                <button onClick={() => this.handleLogOutButton()} >Log Out</button>
                <br />
                <h2>Status: {this.props.loggedInStatus}</h2>
                <SignUp handleSuccessfulAuth={this.handleSuccessfulAuth} />
                <LogIn handleSuccessfulAuth={this.handleSuccessfulAuth} />
            </div>
        )
    }
}
