import React from 'react'
import { AppButton } from '../components/AppButton'
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined'
import styled from 'styled-components'
import EmptyPlaceholder from '../components/EmptyPlaceholder'

const ProfilePage = () => {
  return (
    <Container>
      <h3>Profile</h3>
    <EmptyPlaceholder />
      <AddProfileButton
        title='New Profile'
        icon={<AddCircleOutlineOutlinedIcon />}
      />
    </Container>
  )
}

export default ProfilePage

const Container = styled.div`
  padding: 8px;
`

const AddProfileButton = styled(AppButton)`
    position: fixed;
    bottom: 0;
    left: 0;
    right:0;
    margin: 10px;
`