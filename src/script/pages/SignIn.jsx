import { useState } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import Navigation from "../components/Navigation"
import { getUserLogin } from "../../redux/apiServices"
import { logIn } from "../../redux/userSlice"
import "../../styles/index.scss"

export default function SignIn() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [errorMessage, setErrorMessage] = useState("")

  const [user, setUser] = useState({
    email: "" /* tony@stark.com -  steve@rogers.com */,
    password: "" /* password123 - password456 */,
  })

  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (user.email === "" || user.password === "") {
      setErrorMessage("You must fill all the fields")
    } else {
      setErrorMessage("")
      const response = await getUserLogin(user.email, user.password)
      if (response.error) {
        setErrorMessage(response.error)
      } else {
        dispatch(logIn({ token: response, email: user.email }))
        navigate("/profile")
      }
    }
  }

  return (
    <>
      <header>
        <Navigation />
      </header>
      <main className="signin-page">
        <div className="signin-page_content">
          {" "}
          <h2>
            Sign in to
            <br />
            <span className="text-span-signin">Argent Bank</span>
          </h2>
          <h3>And access of all your transactions!</h3>
        </div>

        <form method="post" onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <label htmlFor="email">Username</label>
            <input
              type="text"
              name="email"
              id="email"
              onChange={onChange}
              value={user.email}
              required
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              onChange={onChange}
              value={user.password}
              required
            />
          </div>
          <div className="input-remember">
            <input
              type="checkbox"
              name="remember-me"
              id="remember-me"
              defaultChecked={false}
            />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          <span className="error-message">{errorMessage}</span>
          <button type="submit" className="sign-in-button">
            Sign In
          </button>
        </form>
      </main>
    </>
  )
}
