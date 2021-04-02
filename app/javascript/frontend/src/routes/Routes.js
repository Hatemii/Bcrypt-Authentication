import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from '../components/HomePage/Home'
import SignUp from '../components/Auth/SignUp'
import LogIn from "../components/Auth/LogIn"
import Dashboard from '../components/HomePage/Dashboard'

export default class Routes extends Component {
    constructor() {
        super();

        this.state = {
            loggedInStatus: "Not Logged In",
            user: {}
        }

        this.handleLogin = this.handleLogin.bind(this)
    }

    handleLogin(data) {
        this.setState({
            loggedInStatus: "Logged In",
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
