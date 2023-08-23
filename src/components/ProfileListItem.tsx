import React from 'react'
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined'
import { styled } from 'styled-components';

interface ProfileListItemProps {
  name: string;
  gender: string;
  age: string;
  email: string;

}

interface ListInfoItemProps {
  title: string;
  subtitle: string;
}

const ProfilePlaceholder = () =>{
  return (
    <ProfilePlaceholderBg>
      <PersonOutlineOutlinedIcon />
    </ProfilePlaceholderBg>
  )
}

const ListInfoItem = (props: ListInfoItemProps) =>{
  return (
    <div>
      <div>{props.title}</div>
      <div>{props.subtitle}</div>
    </div>
  )
}


const ProfileListItem = (props: ProfileListItemProps) => {
  return (
    <Container>
      <ProfilePlaceholder />
      <ListItemsContainer>
        <div>
          <ListInfoItem title='Name' subtitle={props.name} />
          <ListInfoItem title='Gender' subtitle={props.gender} />
          <ListInfoItem title='Age' subtitle={props.age} />
        </div>
        <div>
          <ListInfoItem title='Email' subtitle={props.email} />
        </div>
      </ListItemsContainer>
    </Container>
  )
}

export default ProfileListItem

const Container = styled.div`
  display: flex;
  background-color: grey;
`
const ListItemsContainer = styled.div`
    width: 100%;
    > div {
      display: grid;
      grid-template-columns: auto 80px 50px;
    }
`

const ProfilePlaceholderBg = styled.div`
  background-color: #f2f2f2;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
`