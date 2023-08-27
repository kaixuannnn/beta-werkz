import classes from './EmptyPlaceholder.module.css'

const EmptyPlaceholder = () => {
  return (
    <div className={classes.container}>
      <img src='images/empty-state.png' alt='placeholder' />
      <div>No Profile Yet</div>
      <div>Tap on the button at the bottom to create a new profile.</div>
    </div>
  )
}

export default EmptyPlaceholder
