import style from "./style.module.scss"

const {button} = style

const ButtonsAnswer = ({onClick, children}) => {
  return (
    <div className={button} onClick={onClick}>
      {children}
    </div>
  )
}

export default ButtonsAnswer
