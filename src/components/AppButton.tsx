import { ButtonHTMLAttributes, useContext } from 'react';
import classes from './AppButton.module.css';
import { ThemeContext } from '../context/ThemeContext';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string
  icon?: any
  className?: string

}

export const AppButton = (props: ButtonProps) => {
 const {isSecondary}= useContext(ThemeContext);
  return (
    <button className={`${classes.button} ${props.className} ${isSecondary&&classes.secondary}`} 
    type={props.type} onClick={props.onClick} >
        {props.icon || <div />}  
      <span>{props.title}</span>
      <div />
    </button>
  )
}
