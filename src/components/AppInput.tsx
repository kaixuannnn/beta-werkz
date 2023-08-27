import { Field } from 'formik';
import classes from './AppInput.module.css'

interface InputProps {
    placeholder?: string;
    title?: string;
    className?: string;
    id: string;
    type?: string;
    disabled?: boolean;
    message?:string;
}

const AppInput = (props: InputProps) => {
  return (
    <div  className={`${classes.container} ${props.className}`} >
      {props.title && <label htmlFor={props.id} className={classes.title}>{props.title}</label>}
      <Field className={classes.input} placeholder={props.placeholder || ''} name={props.id} type={props.type} id={props.id} disabled={props.disabled}/>
      {props.message && <div className={classes.message}>{props.message}</div>}
    </div>
  )
}

export default AppInput

