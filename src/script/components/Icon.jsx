import "../../styles/index.scss"

export default function Icon({ iconImage }) {
  return (
    <div className="icon">
      <img className="icon_image" alt="" src={iconImage} />
    </div>
  )
}
