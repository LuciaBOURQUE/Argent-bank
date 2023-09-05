import { useState } from "react"
import { useSelector } from "react-redux"
import { putUserInfos } from "../../redux/apiServices"
import "../../styles/index.scss"

export default function EditProfil() {
  const token = useSelector((state) => state.user.token)
  const firstName = useSelector((state) => state.user.firstName)
  const lastName = useSelector((state) => state.user.lastName)

  const [user, setUser] = useState({
    firstName: "" /* Tony-  Steve */,
    lastName: "" /* Stark - Rogers */,
  })

  const [inputShow, setInputShow] = useState(false)
  const onClick = () => {
    setInputShow(true)
  }

  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const response = await putUserInfos(token, user.firstName, user.lastName)
    console.log(response)
  }

  return (
    <section className="header-profil">
      <div className="header-profil_edit">
        <h1>Welcome back {firstName}</h1>
        <button
          className="edit-button edit-button-display"
          style={{ display: inputShow ? "none" : "block" }}
          onClick={onClick}
        >
          Edit Name
        </button>{" "}
      </div>
      {inputShow ? (
        <div className="header-profil_input">
          <div className="input-bloc1">
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
            <button className="edit-button" onClick={handleSubmit}>
              Save
            </button>
          </div>

          <div className="input-bloc2">
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
            <button className="edit-button">Cancel</button>
          </div>
        </div>
      ) : null}
    </section>
  )
}
