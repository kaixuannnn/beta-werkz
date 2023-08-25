import React from 'react'
import { styled } from 'styled-components'

interface InputProps {
    placeholder?: string;
    title?: string;
}

const AppInput = (props: InputProps) => {
  return (
    <Container>
      {props.title && <Title>{props.title}</Title>}
      <Input placeholder={props.placeholder || ''} />
    </Container>
  )
}

export default AppInput

const Container = styled.div`
  padding: 8px 0;
  display: flex;
  flex-direction: column;
`

const Input = styled.input`
    border: 1px solid #707070;
    height: 30px;
    border-radius: 3px;
`

const Title = styled.div`
  color: #707070;
  padding-bottom: 5px;
`