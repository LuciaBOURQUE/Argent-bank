import { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { logInSuccess } from "../../redux/userSlice"
import "../../styles/index.scss"

export default function EditProfil() {
  const dispatch = useDispatch()
  const firstName = useSelector((state) => state.user.firstName)
  const lastName = useSelector((state) => state.user.lastName)
  const state = useSelector((state) => state.user)
  console.log(state)
  const [user, setUser] = useState({
    firstName: "" /* Tony-  Steve */,
    lastName: "" /* Stark - Rogers */,
  })

  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(user.firstName)
    dispatch(
      logInSuccess({
        firstName: user.firstName,
        lastName: user.lastName,
      })
    )
  }

  return (
    <header className="header-profil">
      <h1>Welcome back {firstName}</h1>
      <div>
        <div className="input-wrapper">
          <label htmlFor="firstName"></label>
          <input
            type="text"
            name="firstName"
            id="firstName"
            onChange={onChange}
            value={user.firstName}
            placeholder={firstName}
          />
        </div>

        <div className="input-wrapper">
          <label htmlFor="lastName"></label>
          <input
            type="text"
            name="lastName"
            id="lastName"
            onChange={onChange}
            value={user.lastName}
            placeholder={lastName}
          />
        </div>
      </div>
      <button className="edit-button" onSubmit={handleSubmit}>
        Edit Name
      </button>
    </header>
  )
}
