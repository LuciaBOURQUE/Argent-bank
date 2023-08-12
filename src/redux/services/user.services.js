import axios from "axios"
import authHeader from "./auth-header"

const API_URL = "http://localhost:3001/api/v1/"

export default class UserService {
  getPublicContent() {
    return axios.get(API_URL + "all")
  }

  getUserBoard() {
    return axios.get(API_URL + "/user/login", { headers: authHeader() })
  }

  getModeratorBoard() {
    return axios.get(API_URL + "/user/signup", { headers: authHeader() })
  }

  getAdminBoard() {
    return axios.get(API_URL + "/user/profil", { headers: authHeader() })
  }
}

//export default new UserService();
