import { Field } from 'formik'
import classes from './AppSelect.module.css'

interface SelectProps {
  title: string;
  id: string;
  items:{title: string, value: string}[];
  className?: string;
}

const AppSelect = (props: SelectProps) => {
    const listItems = props.items.map(item => <option value={item.value} key={item.title}>{item.title}</option>)  
  return (
    <div className={`${classes.container} ${props.className}`}>
      <div className={classes.title}>{props.title}</div>
      <Field as='select' className={classes.select} id={props.id} name={props.id} >{listItems}</Field>
    </div>
  )
}

export default AppSelect
