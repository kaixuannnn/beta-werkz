import { Field } from 'formik';
import classes from './AppInput.module.css'

interface InputProps {
    placeholder?: string;
    title?: string;
    className?: string;
    id: string;
    type?: string;
}

const AppInput = (props: InputProps) => {
  return (
    <div  className={`${classes.container} ${props.className}`} >
      {props.title && <label htmlFor={props.id} className={classes.title}>{props.title}</label>}
      <Field className={classes.input} placeholder={props.placeholder || ''} name={props.id} type={props.type} id={props.id}/>
    </div>
  )
}

export default AppInput

