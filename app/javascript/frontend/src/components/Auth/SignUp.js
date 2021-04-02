import axios from 'axios'
import React, { Component } from 'react'
// import UserServer from "../../server/UserServer"

export default class SignUp extends Component {
    constructor(props) {
        super(props)

        this.state = {
            email: "",
            password: "",
            password_confirmation: ""
        }
    }

    userInputHandle = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    userRegistration = (e) => {
        e.preventDefault();

        const {
            email,
            password,
            password_confirmation
        } = this.state

        axios.post("http://localhost:3000/users", {
            user: {
                email: email,
                password: password,
                password_confirmation: password_confirmation
            }
        }, { withCredentials: true }
        ).then(res => {
            if (res.data.status === "created") {
                this.props.handleSuccessfulAuth(res.data)
            }
        }).catch(err => {
            console.log(err);
        })
    }

    render() {
        return (
            <div>
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


                                    <div className="form-group">
                                        <label htmlFor="exampleInpuPasswordConfirmation">Password Confirmation</label>
                                        <input type="password" placeholder="Password Confirmation" name="password_confirmation" className="form-control"
                                            value={this.state.password_confirmation} onChange={this.userInputHandle} />
                                    </div>

                                    <button className="btn btn-success" onClick={this.userRegistration}>Sign Up</button>

                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
