import React from 'react'
import { styled } from 'styled-components'


interface ButtonProps {
    title: string;
    icon?: any;
    className?: string;
}

export const AppButton = (props: ButtonProps) => {
  return (
    <Button className={props.className} onClick={() => console.log('click')}>
        {props.icon || <div />}  
      <span>{props.title}</span>
      <div />
    </Button>
  )
}

const Button = styled.div`
    background-color: #628df2;
    padding: 8px;
    cursor: pointer;
    color: white;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 3px;
`