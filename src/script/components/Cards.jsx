import PropTypes from "prop-types"
import Icon from "./Icon"
import "../../styles/index.scss"

export default function Cards({ cardText, cardTitle, iconImage }) {
  return (
    <div className="cards">
      <Icon iconImage={iconImage} />
      <div className="cards_content">
        <h2 className="cards_content_title">{cardTitle}</h2>
        <p className="cards_content_text">{cardText}</p>
      </div>
    </div>
  )
}

Cards.propTypes = {
  cardText: PropTypes.string,
  cardTitle: PropTypes.string,
}
