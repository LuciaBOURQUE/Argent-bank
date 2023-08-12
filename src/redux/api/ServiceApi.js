import axios from "axios"

export default function AuthService() {
  const getUserLogin = async (email, password) => {
    try {
      const response = await axios.post(
        "http://localhost:3001/api/v1/user/login",
        { email, password }
      )
      return response.data.body.token
    } catch (e) {
      if (e.response.data.message === "Error: User not found!") {
        return { error: "User not found in database" }
      } else {
        if (e.response.data.message === "Error: Password is invalid") {
          return { error: "User's password is invalid" }
        } else {
          return { error: "Server connection error" }
        }
      }
    }
  }
  return { getUserLogin }
}

export const axiosProfile = async (token) => {
  const response = await axios.post(
    "http://localhost:3001/api/v1/user/profile",
    {},
    { headers: { Authorization: `Bearer ${token}` } }
  )
  return response.data.body
}

/*
export const axiosUserUpdate = async (token, newUser) => {
  const response = await axios.put(
    "http://localhost:3001/api/v1/user/profile",
    newUser,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  )
  return response.data.body
}*/
