import axios from "axios"

const root = "http://localhost:3000"

class UserServer {
    Registration(newUser) {
        return axios.post(root + "/users")
    }


    LogIn() {
        return axios.post(root + "/login")
    }

}

export default new UserServer()