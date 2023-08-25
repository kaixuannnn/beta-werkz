import React from 'react'
import styled from 'styled-components'

const AppSelect = ({title='Gender', id='1', items= [{title: 'Female', value: 'F'}]}) => {
    const listItems = items.map(item => <option value={item.value}>{item.title}</option>)  
  return (
    <div>
        <Title>{title}</Title>
      <Select id={id} >{listItems}</Select>
    </div>
  )
}

export default AppSelect

const Select = styled.select`
  width: 100%;
  padding: 8px;
`



const Title = styled.div`
  color: #707070;
  padding-bottom: 5px;
`