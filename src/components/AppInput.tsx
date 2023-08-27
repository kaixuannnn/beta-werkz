import classes from './AppInput.module.css'

interface InputProps {
    placeholder?: string;
    title?: string;
}

const AppInput = (props: InputProps) => {
  return (
    <div className={classes.container}>
      {props.title && <div className={classes.title}>{props.title}</div>}
      <input className={classes.input} placeholder={props.placeholder || ''} />
    </div>
  )
}

export default AppInput

