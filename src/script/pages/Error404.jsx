import { NavLink } from "react-router-dom"
import "../../styles/index.scss"

export default function Error404() {
  return (
    <main className="error-page">
      <section className="error-page_title">
        <h1>Ooops... looks like you got lost</h1>
        <h3>Get back home and try again</h3>
      </section>
      <NavLink to="/" className="error-page_button">
        Return home
      </NavLink>
    </main>
  )
}
