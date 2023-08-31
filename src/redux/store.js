import { configureStore, combineReducers } from "@reduxjs/toolkit"
import userSlice from "./userSlice"

const reduxDevtools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const reducers = combineReducers({
  user: userSlice,
})

const store = configureStore({
  reducer: reducers,
  reduxDevtools,
})

export default store
