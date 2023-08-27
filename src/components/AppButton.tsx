import classes from './AppButton.module.css';

interface ButtonProps {
    title: string;
    icon?: any;
    className?: string;
}

export const AppButton = (props: ButtonProps) => {
  return (
    <div className={`${classes.button} ${props.className}`} onClick={() => console.log('click')}>
        {props.icon || <div />}  
      <span>{props.title}</span>
      <div />
    </div>
  )
}

