import React from 'react'
import { styled } from 'styled-components'

interface WrapperProps {
    children: React.ReactChild | React.ReactChild[];
}

const Wrapper = (props:WrapperProps) => {
  return (
    <Container>{props.children}</Container>
  )
}

export default Wrapper

const Container = styled.div`
    padding: 8px;
`