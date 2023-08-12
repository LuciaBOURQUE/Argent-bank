import React from "react"
import { createRoot } from "react-dom/client"
import { BrowserRouter, Route, Routes } from "react-router-dom"

import { Provider } from "react-redux"
import store from "./redux/utils/store"

import Footer from "./script/components/Footer"
import Homepage from "./script/pages/Homepage"
import SignIn from "./script/pages/SignIn"
import User from "./script/pages/User"
import Error404 from "./script/pages/Error404"

const rootElement = document.getElementById("root")
const root = createRoot(rootElement)
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/profile" element={<User />} />
        <Route path="/*" element={<Error404 />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </Provider>
)
