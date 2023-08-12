import { NavLink } from "react-router-dom"
import "../../styles/index.scss"

export default function Error404() {
  return (
    <main className="">
      <h1>Oups erreur 404</h1>
      <NavLink to="/" className="error404-return">
        {" "}
        Return home
      </NavLink>
    </main>
  )
}
