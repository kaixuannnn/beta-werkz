import React from 'react'
import styled from 'styled-components'
import AppInput from '../components/AppInput'
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined'
import { AppButton } from '../components/AppButton'

const EditProfilePage = () => {
  return (
    <Container>
      <h4>New Profile</h4>
      <AppInput placeholder='Enter Username' title='Name'></AppInput>
      <AppInput placeholder='Enter number' title='Enter Number'></AppInput>
      <AppInput placeholder='Enter email address' title='Email'></AppInput>
      <AddProfileButton
        title='New Profile'
        icon={<AddCircleOutlineOutlinedIcon />}
      />
    </Container>
  )
}

export default EditProfilePage

const Container = styled.div`
    display: flex;
    flex-direction: column;
`

const AddProfileButton = styled(AppButton)`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  margin: 10px;
`