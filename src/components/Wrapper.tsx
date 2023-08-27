import React, { useContext } from 'react'
import classes from './Wrapper.module.css'
import { ThemeContext } from '../context/ThemeContext';

interface WrapperProps {
    children: React.ReactNode;
}

const Wrapper = (props:WrapperProps) => {
  const {isSecondary}= useContext(ThemeContext);
  console.log(isSecondary)
  return (
    <div className={`${classes.container} ${isSecondary&&classes.secondary}`}>{props.children}</div>
  )
}

export default Wrapper

