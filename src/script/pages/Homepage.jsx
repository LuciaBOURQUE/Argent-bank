import Navigation from "../components/Navigation"
import Cards from "../components/Cards"
import iconcat from "../../assets/chat.svg"
import iconmoney from "../../assets/money.svg"
import iconsecurity from "../../assets/security.svg"
import "../../styles/index.scss"

export default function Homepage() {
  return (
    <>
      <header>
        <Navigation />
      </header>
      <main className="hero">
        <section className="hero_title">
          <h1>
            No fees. <br />
            No minimum deposit. <br />
            <span className="text-span">High interest rates.</span>
          </h1>
          <h2>Open a saving account with Argent Bank today!</h2>
        </section>
        <section className="hero_cards">
          <Cards
            iconImage={iconcat}
            cardTitle={"You are our #1 priority"}
            cardText={
              "Need to talk to a representative ? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes."
            }
          />
          <Cards
            iconImage={iconmoney}
            cardTitle={"More savings means higher rates"}
            cardText={
              "The more you save with us, the higher your interest rate will be!"
            }
          />
          <Cards
            iconImage={iconsecurity}
            cardTitle={"Security you can trust"}
            cardText={
              "We use top of the line encryption to make sure your data and money is always safe."
            }
          />
        </section>
      </main>
    </>
  )
}
