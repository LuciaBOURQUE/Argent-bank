/* Les slices de Redux Toolkit permettent de combiner createAction et createReducer
    en un seul appel de fonction. Cela permet donc de définir les actions et 
    le reducer qui va avec, d’un seul coup. */
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
        isLoggedIn: false,
      }
    },
  },
})

/* On extrait les actions et le reducer puis
   on export le reducer comme default export */
export const { logIn, logInSuccess, logOut } = userSlice.actions
export default userSlice.reducer
