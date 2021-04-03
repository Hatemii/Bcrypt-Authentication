import React, { Component } from 'react'
import axios from "axios"
// import UserServer from "../../server/UserServer"


export default class LogIn extends Component {
    constructor(props) {
        super(props)

        this.state = {
            email: "",
            password: "",
        }
    }

    userInputHandle = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    userLogIn = (e) => {
        e.preventDefault();

        const {
            email,
            password,
        } = this.state

        axios.post("http://localhost:3000/login",
            {
                user: {
                    email: email,
                    password: password
                }
            }, { withCredentials: true }
        ).then(res => {
            if (res.data.logged_in) {
                this.props.handleSuccessfulAuth(res.data)
            }
        }).catch(err => {
            console.log(err);
        })
    }

    render() {
        return (
            <div>
                <h2>Log In</h2>

                <div className="conainer">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <div className="card-body">
                                <form>

                                    <div className="form-group">
                                        <label htmlFor="exampleInpuEmail">Email</label>
                                        <input type="text" placeholder="Email" name="email" className="form-control"
                                            value={this.state.email} onChange={this.userInputHandle} />
                                    </div>


                                    <div className="form-group">
                                        <label htmlFor="exampleInpuPassword">Password</label>
                                        <input type="password" placeholder="Password" name="password" className="form-control"
                                            value={this.state.password} onChange={this.userInputHandle} />
                                    </div>

                                    <button className="btn btn-success" onClick={this.userLogIn}>Log In</button>

                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}