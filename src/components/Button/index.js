import './button.css'

const Button = props => {
  const {detail, onclikedButton} = props
  const {id, imageUrl, dataTestId} = detail
  const onClicking = () => {
    onclikedButton(id, imageUrl)
  }
  return (
    <>
      <button
        className="buttton"
        type="button"
        onClick={onClicking}
        data-testid={dataTestId}
      >
        <img src={imageUrl} alt={id} className="img" />
      </button>
    </>
  )
}

export default Button
