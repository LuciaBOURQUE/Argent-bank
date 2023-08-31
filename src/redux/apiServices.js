import axios from "axios"

export const getUserLogin = async (email, password) => {
  try {
    const response = await axios.post(
      "http://localhost:3001/api/v1/user/login",
      { email, password }
    )
    console.log(response.data.body.token)
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

export const getUserToken = async (token) => {
  try {
    const response = await axios.post(
      "http://localhost:3001/api/v1/user/profile",
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
    return response.data.body
  } catch (e) {
    console.log(e)
  }
}

export const putUserInfos = async (token, firstName, lastName) => {
  try {
    console.log(firstName, lastName)
    const response = await axios.put(
      "http://localhost:3001/api/v1/user/profile",
      { firstName: firstName, lastName: lastName },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
    console.log(response.data.body)
    return response.data.body
  } catch (e) {
    console.log(e)
  }
}
