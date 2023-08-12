import axios from "axios"

const API_URL = "http://localhost:3001/api/v1/"

export default class AuthService {
  login(username, password) {
    return axios
      .post(API_URL + "user/login", { username, password })
      .then((response) => {
        if (response.data.accessToken) {
          localStorage.setItem("user", JSON.stringify(response.data))
        }

        return response.data
      })
  }

  logout() {
    localStorage.removeItem("user")
  }

  register(username, email, password) {
    return axios.post(API_URL + "user/profile", {
      username,
      email,
      password,
    })
  }
}

//export default new AuthService();
