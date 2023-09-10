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
        <p className="account-title">{accountTitle}</p>
        <h2 className="account-amount">{accountAmount}</h2>
        <p className="account-amount-description">{accountDescription}</p>
      </div>
      <button className="transaction-button">View transactions</button>
    </section>
  )
}

AccountUser.propTypes = {
  accountTitle: PropTypes.string.isRequired,
  accountAmount: PropTypes.string.isRequired,
  accountDescription: PropTypes.string.isRequired,
}
