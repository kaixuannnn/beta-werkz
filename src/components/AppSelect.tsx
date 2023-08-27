import classes from './AppSelect.module.css'

const AppSelect = ({title='Gender', id='1', items= [{title: 'Female', value: 'F'}], className=''}) => {
    const listItems = items.map(item => <option value={item.value}>{item.title}</option>)  
  return (
    <div className={`${classes.container }${className}`}>
      <div className={classes.title}>{title}</div>
      <select className={classes.select} id={id} >{listItems}</select>
    </div>
  )
}

export default AppSelect
