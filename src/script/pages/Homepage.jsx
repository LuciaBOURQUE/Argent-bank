import Navigation from "../components/Navigation"
import iconcat from "../../assets/icon-chat.png"
import iconmoney from "../../assets/icon-money.png"
import iconsecurity from "../../assets/icon-security.png"
import "../../styles/index.scss"

export default function Homepage() {
  return (
    <>
      <header>
        <Navigation />
      </header>
      <main className="">
        <div className="hero">
          <section className="hero__content">
            <p className="subtitle">No fees.</p>
            <p className="subtitle">No minimum deposit.</p>
            <p className="subtitle">High interest rates.</p>
            <p className="text">
              Open a savings account with Argent Bank today!
            </p>
          </section>
        </div>
        <section className="features">
          <div className="feature__item">
            <img src={iconcat} alt="icon cat" className="feature-icon" />
            <h3 className="feature__item__title">You are our #1 priority</h3>
            <p>
              Need to talk to a representative ? You can get in touch through
              our 24/7 chat or through a phone call in less than 5 minutes.
            </p>
          </div>
          <div className="feature__item">
            <img src={iconmoney} alt="icon money" className="feature-icon" />
            <h3 className="feature__item__title">
              More savings means higher rates
            </h3>
            <p>
              The more you save with us, the higher your interest rate will be!
            </p>
          </div>
          <div className="feature__item">
            <img
              src={iconsecurity}
              alt="icon security"
              className="feature-icon"
            />
            <h3 className="feature__item__title">Security you can trust</h3>
            <p>
              We use top of the line encryption to make sure your data and money
              is always safe.
            </p>
          </div>
        </section>
      </main>
    </>
  )
}
