import { useParams } from "react-router-dom"
import AccountUser from "../components/AccountUser"
import ProfilNavigation from "../components/ProfilNavigation"
import profil from "../../assets/Tony-Stark.jpg"
import "../../styles/index.scss"

export default function User() {
  const { id } = useParams()

  return (
    <div>
      <ProfilNavigation profil={profil} name={"Tony Stark"} />
      <main className="main bg-light">
        <div className="main__content">
          <div className="main__content__header">
            <h1>Welcome back</h1>
            <button className="edit-button">Edit Name</button>
          </div>
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
