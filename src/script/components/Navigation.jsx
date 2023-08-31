import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { NavLink } from "react-router-dom"
import { logOut } from "../../redux/userSlice"
import logo from "../../assets/argentBankLogo.png"
import "../../styles/index.scss"

export default function ProfilNavigation() {
  const token = useSelector((state) => state.user.token)
  const firstName = useSelector((state) => state.user.firstName)
  const [showSignin, setShowSignin] = useState(true)
  const [showLogOut, setShowLogout] = useState(false)
  const dispatch = useDispatch()

  const logOutProfil = () => {
    dispatch(logOut())
    setShowSignin(true)
    setShowLogout(false)
  }

  useEffect(() => {
    if (token) {
      setShowSignin(false)
      setShowLogout(true)
    }
  }, [token])

  return (
    <nav className="nav-profil">
      <NavLink to="/" className="main-nav-logo">
        <img
          className="main-nav-logo__image"
          src={logo}
          alt="Argent Bank Logo"
        />
      </NavLink>

      {showLogOut ? (
        <div className="nav-profil_setting">
          <div className="nav-setting-content">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10 2C8.60077 1.99974 7.22593 2.36649 6.01273 3.06363C4.79952 3.76077 3.79038 4.76392 3.08603 5.97295C2.38168 7.18199 2.00675 8.55462 1.99868 9.95383C1.9906 11.3531 2.34966 12.7299 3.04001 13.947C3.50662 13.3406 4.10644 12.8496 4.7931 12.512C5.47975 12.1744 6.23485 11.9992 7.00001 12H13C13.7652 11.9992 14.5203 12.1744 15.2069 12.512C15.8936 12.8496 16.4934 13.3406 16.96 13.947C17.6504 12.7299 18.0094 11.3531 18.0013 9.95383C17.9933 8.55462 17.6183 7.18199 16.914 5.97295C16.2096 4.76392 15.2005 3.76077 13.9873 3.06363C12.7741 2.36649 11.3993 1.99974 10 2ZM17.943 16.076C19.28 14.333 20.0032 12.1968 20 10C20 4.477 15.523 0 10 0C4.47701 0 1.12532e-05 4.477 1.12532e-05 10C-0.00329018 12.1968 0.719917 14.333 2.05701 16.076L2.05201 16.094L2.40701 16.507C3.3449 17.6035 4.5094 18.4836 5.82024 19.0866C7.13109 19.6897 8.55711 20.0013 10 20C12.0273 20.0037 14.0074 19.3879 15.675 18.235C16.3859 17.7438 17.0306 17.163 17.593 16.507L17.948 16.094L17.943 16.076ZM10 4C9.20436 4 8.4413 4.31607 7.87869 4.87868C7.31608 5.44129 7.00001 6.20435 7.00001 7C7.00001 7.79565 7.31608 8.55871 7.87869 9.12132C8.4413 9.68393 9.20436 10 10 10C10.7957 10 11.5587 9.68393 12.1213 9.12132C12.6839 8.55871 13 7.79565 13 7C13 6.20435 12.6839 5.44129 12.1213 4.87868C11.5587 4.31607 10.7957 4 10 4Z"
                fill="black"
              />
            </svg>
            <NavLink to="/profile">
              <h3>{firstName}</h3>
            </NavLink>
          </div>{" "}
          <NavLink to="/" onClick={logOutProfil} className="nav-setting-button">
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fillRule="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 18C1.45 18 0.979002 17.804 0.587002 17.412C0.195002 17.02 -0.000664969 16.5493 1.69779e-06 16V2C1.69779e-06 1.45 0.196002 0.979002 0.588002 0.587002C0.980002 0.195002 1.45067 -0.000664969 2 1.69779e-06H9V2H2V16H9V18H2ZM13 14L11.625 12.55L14.175 10H6V8H14.175L11.625 5.45L13 4L18 9L13 14Z"
                fillRule="black"
              />
            </svg>
            Sign out
          </NavLink>
        </div>
      ) : null}

      {showSignin ? (
        <NavLink to="/login" className="nav-profil_signin">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M10 2C8.60077 1.99974 7.22593 2.36649 6.01273 3.06363C4.79952 3.76077 3.79038 4.76392 3.08603 5.97295C2.38168 7.18199 2.00675 8.55462 1.99868 9.95383C1.9906 11.3531 2.34966 12.7299 3.04001 13.947C3.50662 13.3406 4.10644 12.8496 4.7931 12.512C5.47975 12.1744 6.23485 11.9992 7.00001 12H13C13.7652 11.9992 14.5203 12.1744 15.2069 12.512C15.8936 12.8496 16.4934 13.3406 16.96 13.947C17.6504 12.7299 18.0094 11.3531 18.0013 9.95383C17.9933 8.55462 17.6183 7.18199 16.914 5.97295C16.2096 4.76392 15.2005 3.76077 13.9873 3.06363C12.7741 2.36649 11.3993 1.99974 10 2ZM17.943 16.076C19.28 14.333 20.0032 12.1968 20 10C20 4.477 15.523 0 10 0C4.47701 0 1.12532e-05 4.477 1.12532e-05 10C-0.00329018 12.1968 0.719917 14.333 2.05701 16.076L2.05201 16.094L2.40701 16.507C3.3449 17.6035 4.5094 18.4836 5.82024 19.0866C7.13109 19.6897 8.55711 20.0013 10 20C12.0273 20.0037 14.0074 19.3879 15.675 18.235C16.3859 17.7438 17.0306 17.163 17.593 16.507L17.948 16.094L17.943 16.076ZM10 4C9.20436 4 8.4413 4.31607 7.87869 4.87868C7.31608 5.44129 7.00001 6.20435 7.00001 7C7.00001 7.79565 7.31608 8.55871 7.87869 9.12132C8.4413 9.68393 9.20436 10 10 10C10.7957 10 11.5587 9.68393 12.1213 9.12132C12.6839 8.55871 13 7.79565 13 7C13 6.20435 12.6839 5.44129 12.1213 4.87868C11.5587 4.31607 10.7957 4 10 4Z"
              fill="black"
            />
          </svg>
          Sign In
        </NavLink>
      ) : null}
    </nav>
  )
}
