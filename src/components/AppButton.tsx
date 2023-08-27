import { ButtonHTMLAttributes } from 'react';
import classes from './AppButton.module.css';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string
  icon?: any
  className?: string
}

export const AppButton = (props: ButtonProps) => {
  return (
    <button className={`${classes.button} ${props.className}`} 
    type={props.type} onClick={() => console.log('click')} >
        {props.icon || <div />}  
      <span>{props.title}</span>
      <div />
    </button>
  )
}

