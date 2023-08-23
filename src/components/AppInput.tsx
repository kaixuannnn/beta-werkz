import React from 'react'
import { styled } from 'styled-components'

interface InputProps {
    placeholder?: string;
    title?: string;
}

const AppInput = (props: InputProps) => {
  return (
    <div>
      {props.title && <Title>{props.title}</Title>}
      <Input placeholder={props.placeholder || ''} />
    </div>
  )
}

export default AppInput

const Input = styled.input`
    border: 1px solid #707070;
    height: 30px;
    width: 200px;
    border-radius: 3px;
`

const Title = styled.div`
  color: #707070;
`