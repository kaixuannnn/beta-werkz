import React from 'react'
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined'
import classes from './ProfileListItem.module.css'
import { useNavigate } from 'react-router-dom';
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
    <div className={classes.placeholder}>
      <PersonOutlineOutlinedIcon />
    </div>
  )
}

const ListInfoItem = (props: ListInfoItemProps) =>{
  return (
    <div className={classes['list-item-container']}>
      <div className={classes['list-item-title']}>{props.title}</div>
      <div className={classes['list-item-subtitle']}>{props.subtitle}</div>
    </div>
  )
}


const ProfileListItem = (props: ProfileListItemProps) => {
  const navigate = useNavigate()
  return (
    <div className={classes.container} onClick={()=>navigate(`/edit-profile/${props.email}`)}>
      <ProfilePlaceholder />
      <div className={classes.listitem}>
        <div>
          <ListInfoItem title='Name' subtitle={props.name} />
          <ListInfoItem title='Gender' subtitle={props.gender} />
          <ListInfoItem title='Age' subtitle={props.age} />
        </div>
        <div>
          <ListInfoItem title='Email' subtitle={props.email} />
        </div>
      </div>
    </div>
  )
}

export default ProfileListItem

