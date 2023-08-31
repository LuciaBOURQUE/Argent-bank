import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import AccountUser from "../components/AccountUser"
import Navigation from "../components/Navigation"
import { getUserToken } from "../../redux/apiServices"

import "../../styles/index.scss"
import { logInSuccess } from "../../redux/userSlice"
import EditProfil from "../components/EditProfil"

export default function User() {
  const token = useSelector((state) => state.user.token)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  useEffect(() => {
    ;(async () => {
      if (!token) {
        navigate("/login")
      }
      try {
        const response = await getUserToken(token)
        dispatch(
          logInSuccess({
            firstName: response.firstName,
            lastName: response.lastName,
          })
        )
      } catch (error) {
        console.log(error)
      }
    })()
  }, [dispatch, navigate, token])

  return (
    <div>
      <Navigation />
      <main className="main bg-light">
        <div className="main__content">
          <EditProfil />
          <AccountUser
            accountTitle={"Argent Bank Checking (x8349)"}
            accountAmount={"$2,082.79"}
            accountDescription={"Available Balance"}
          />
          <AccountUser
            accountTitle={"Argent Bank Savings (x6712)"}
            accountAmount={"$10,928.42"}
            accountDescription={"Available Balance"}
          />
          <AccountUser
            accountTitle={"Argent Bank Credit Card (x8349)"}
            accountAmount={"$184.30"}
            accountDescription={"Current Balance"}
          />
        </div>
      </main>
    </div>
  )
}

/*
          <div className="main__content__header">
            <h1>Welcome back</h1>
            <button className="edit-button">Edit Name</button>
          </div>
*/
