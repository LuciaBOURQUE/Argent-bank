import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  email: null,
  isLoggedIn: false,
  token: null,
  firstName: null,
  lastName: null,
}

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logIn: (state, action) => {
      return {
        ...state,
        email: action.payload.email,
        isLoggedIn: true,
        token: action.payload.token,
      }
    },
    logInSuccess: (state, action) => {
      return {
        ...state,
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
      }
    },
    logOut: (state) => {
      return {
        ...state,
        email: null,
        isLoggedIn: false,
        token: null,
        firstName: null,
        lastName: null,
      }
    },
  },
})

export const { logIn, logInSuccess, logOut } = userSlice.actions
export default userSlice.reducer
