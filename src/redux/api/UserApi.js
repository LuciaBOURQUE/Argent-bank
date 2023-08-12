import axios from "axios"

/*
export const axiosToken = async (params) => {
  const response = await axios.post(
    "http://localhost:3001/api/v1/user/login",
    params
  )
  console.log(response.data.body.token)
  return response.data.body.token
}*/

export const axiosProfile = async (token) => {
  const response = await axios.post(
    "http://localhost:3001/api/v1/user/profile",
    {},
    { headers: { Authorization: `Bearer ${token}` } }
  )
  return response.data.body
}

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
}
