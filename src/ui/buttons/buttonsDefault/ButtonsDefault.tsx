import style from "./style.module.scss"

const {button} = style

const ButtonsDefault = ({onClick, children}) => {
  return (
    <button className={button} onClick={onClick}>
      {children}
    </button>
  )
}

export default ButtonsDefault
