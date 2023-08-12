import "../../styles/index.scss"
import PropTypes from "prop-types"

export default function AccountUser({
  accountTitle,
  accountAmount,
  accountDescription,
}) {
  return (
    <section className="account">
      <div className="account__content">
        <h3 className="account-title">{accountTitle}</h3>
        <p className="account-amount">{accountAmount}</p>
        <p className="account-amount-description">{accountDescription}</p>
      </div>
      <button className="transaction-button">View transactions</button>
    </section>
  )
}

AccountUser.propTypes = {
  accountTitle: PropTypes.string.isRequired,
  accountAmount: PropTypes.string.isRequired, // censé être un chiffre en dollars
  accountDescription: PropTypes.string.isRequired,
}
