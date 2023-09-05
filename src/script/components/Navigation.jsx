import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { NavLink } from "react-router-dom"
import { logOut } from "../../redux/userSlice"
import login from "../../assets/login.svg"
import logout from "../../assets/logout.svg"
import logo from "../../assets/argentBankLogo.png"
import "../../styles/index.scss"

export default function ProfilNavigation() {
  const token = useSelector((state) => state.user.token)
  const firstName = useSelector((state) => state.user.firstName)
  const lastName = useSelector((state) => state.user.lastName)
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
        <div className="nav-profil_logout">
          <NavLink className="nav-setting-content" to="/profile">
            {firstName} {lastName}
          </NavLink>{" "}
          <NavLink to="/" onClick={logOutProfil} className="nav-setting-button">
            <img className="icon-profile" alt="" src={logout} />
            Sign out
          </NavLink>
        </div>
      ) : null}

      {showSignin ? (
        <NavLink to="/login" className="nav-profil_signin">
          <img className="icon-profile" alt="" src={login} />
          Sign In
        </NavLink>
      ) : null}
    </nav>
  )
}
