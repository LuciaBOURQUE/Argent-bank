import PropTypes from "prop-types"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { logOut } from "../../redux/userSlice"
import logo from "../../assets/argentBankLogo.png"
import "../../styles/index.scss"

export default function ProfilNavigation({ profil, name }) {
  const firstName = useSelector((state) => state.user.firstName)

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const onClick = () => {
    dispatch(logOut())
    navigate("/")
  }

  return (
    <nav className="nav-profil">
      <img className="nav-profil_logo" src={logo} alt="Argent Bank Logo" />
      <div className="nav-profil_setting">
        <div className="nav-profil-content">
          <img src={profil} alt={`Img de ${firstName}`} />
          <h3>{firstName}</h3>
        </div>{" "}
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
        <button onClick={onClick}>Signout here</button>
        <div></div>
      </div>
    </nav>
  )
}

ProfilNavigation.propTypes = {
  //profil: PropTypes.object,
  name: PropTypes.string.isRequired,
}
