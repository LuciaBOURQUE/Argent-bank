/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { putUserInfos } from "../../redux/apiServices"
import { logInSuccess } from "../../redux/userSlice"
import "../../styles/index.scss"

export default function EditProfil() {
  const dispatch = useDispatch()
  const token = useSelector((state) => state.user.token)
  const firstName = useSelector((state) => state.user.firstName)
  const lastName = useSelector((state) => state.user.lastName)
  const [buttonDisabled, setbuttonDisabled] = useState(true)

  const [user, setUser] = useState({
    firstName: "" /* Tony-  Steve */,
    lastName: "" /* Stark - Rogers */,
  })

  const [inputShow, setInputShow] = useState(false)
  const onClick = () => {
    setInputShow(true)
  }
  const onClickclose = () => {
    setInputShow(false)
  }

  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log("clické")
    try {
      const response = await putUserInfos(token, user.firstName, user.lastName)
      dispatch(
        logInSuccess({
          firstName: response.firstName,
          lastName: response.lastName,
        })
      )
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    if (!user.firstName === "" || !user.firstName === firstName) {
      //console.log("vide ou idem")
      setbuttonDisabled(false)
    } else {
      setbuttonDisabled(true)
    }
  }, [])

  return (
    <section className="header-profil">
      <div className="header-profil_edit">
        <h2>
          Welcome back <span>{firstName}</span>
        </h2>
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
            <button
              className="save-button"
              onClick={handleSubmit}
              disabled={buttonDisabled}
            >
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
            <button className="edit-button" onClick={onClickclose}>
              Cancel
            </button>
          </div>
        </div>
      ) : null}
    </section>
  )
}
