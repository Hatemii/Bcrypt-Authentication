import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from '../components/HomePage/Home'
import SignUp from '../components/Auth/SignUp'
import LogIn from "../components/Auth/LogIn"
import Dashboard from '../components/HomePage/Dashboard'
import axios from 'axios'

export default class Routes extends Component {
    constructor() {
        super();

        this.state = {
            loggedInStatus: "Not_Logged_In",
            user: {}
        }

        this.handleLogin = this.handleLogin.bind(this)
    }


    checkLoginStatus() {
        axios.get("http://localhost:3000/logged_in",
            { withCredentials: true })
            .then(res => {
                console.log(res.data)
                if (res.data.logged_in && this.state.loggedInStatus === "Not_Logged_In") {
                    this.setState({
                        loggedInStatus: "Logged_In",
                        user: res.data.user
                    })
                } else if (!res.data.logged_in && this.state.loggedInStatus === "Logged In") {
                    this.setState({
                        loggedInStatus: "Not_Logged_In",
                        user: {}
                    })
                }
            }).catch(err => {
                console.log(err)
            })
    }


    componentDidMount() {
        this.checkLoginStatus()
    }


    handleLogin(data) {
        this.setState({
            loggedInStatus: "Logged_In",
            user: data.user
        })
    }

    render() {
        return (
            <div>
                <Router>
                    <Switch>
                        <Route
                            exact path={"/home"}
                            render={props => (
                                <Home{...props}
                                    handleLogin={this.handleLogin}
                                    loggedInStatus={this.state.loggedInStatus} />
                            )}
                        />
                        <Route exact path="/dashboard"
                            render={props => (
                                <Dashboard{...props}
                                    loggedInStatus={this.state.loggedInStatus} />
                            )}
                        />


                        <Route exact path="/signup" component={SignUp} />
                        <Route exact path="/login" component={LogIn} />
                    </Switch>
                </Router>
            </div >
        )
    }
}
