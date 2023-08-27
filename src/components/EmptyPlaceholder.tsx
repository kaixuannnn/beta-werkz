import useScreenWidth from '../hooks/useScreenWidth'
import { screenSizes } from '../utils/breakpoints'
import classes from './EmptyPlaceholder.module.css'

const EmptyPlaceholder = () => {
  const screenWidth= useScreenWidth()
  return (
    <div className={classes.container}>
      <img src='images/empty-state.png' alt='placeholder' />
      <div className={classes.title}>No Profile Yet</div>
      <div className={classes.subtitle}>Tap on the button at the {screenWidth<screenSizes.mobile ? 'bottom' : 'top right'} to create a new profile.</div>
    </div>
  )
}

export default EmptyPlaceholder
