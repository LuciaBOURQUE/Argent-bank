import axios from "axios"

/**
 * This post's API allows you to see if the data sent in parameters corresponds
 * to the connection API in order to obtain the token associated with the profile.
 * @param {string} email
 * @param {(string|number)} password
 * @returns token for login
 */
export const getUserLogin = async (email, password) => {
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

/**
 * This post's API allows you to retrieve a user profile by sending
 * the token as a parameter associated with the profile.
 * @param {*} token
 * @returns a object with profil data (email, firstName, lastName, id)
 */
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

/**
 * This put's API allows you to update the user profile, in particular the firstName and lastName sending in parameters,
 * by sending the token as a parameter associated with the profile.
 * @param {*} token
 * @param {string} firstName
 * @param {string} lastName
 * @returns a new object of user with firstName and lastName edit
 */
export const putUserInfos = async (token, firstName, lastName) => {
  try {
    const response = await axios.put(
      "http://localhost:3001/api/v1/user/profile",
      { firstName: firstName, lastName: lastName },
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
