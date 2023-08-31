import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import AccountUser from "../components/AccountUser"
import ProfilNavigation from "../components/ProfilNavigation"
import { getUserToken } from "../../redux/apiServices"

import profil from "../../assets/Tony-Stark.jpg"
import "../../styles/index.scss"
import { logInSuccess } from "../../redux/userSlice"
import EditProfil from "../components/EditProfil"

export default function User() {
  const token = useSelector((state) => state.user.token)
  const dispatch = useDispatch()

  useEffect(() => {
    ;(async () => {
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
  }, [dispatch, token])

  return (
    <div>
      <ProfilNavigation profil={profil} name={"Tony Stark"} />
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
