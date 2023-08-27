import React from 'react'
import classes from './Wrapper.module.css'

interface WrapperProps {
    children: React.ReactChild | React.ReactChild[];
}

const Wrapper = (props:WrapperProps) => {
  return (
    <div className={classes.container}>{props.children}</div>
  )
}

export default Wrapper

