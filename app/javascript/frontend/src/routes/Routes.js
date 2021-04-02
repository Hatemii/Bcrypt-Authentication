import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from '../components/HomePage/Home'
import SignUp from '../components/Auth/SignUp'
import LogIn from "../components/Auth/LogIn"
export default class Routes extends Component {
    render() {
        return (
            <div>
                <Router>
                    <Route exact path="/" component={Home} />
                    <Route path="/signup" component={SignUp} />
                    <Route path="/login" component={LogIn} />
                </Router>
            </div >
        )
    }
}
