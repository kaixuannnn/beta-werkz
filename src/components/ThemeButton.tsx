import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'

import classes from './ThemeButton.module.css'

const ThemeButton = () => {
  const {toggleTheme} = useContext(ThemeContext);
  return (
    <div className={classes.container}>
   
        <img
          src='images/color-theme.png'
          alt='change theme'
          width='20'
          height='20'
          onClick={() => toggleTheme()}
          className={classes.bg}
        />
     
    </div>
  )
}

export default ThemeButton