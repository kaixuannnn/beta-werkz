
import { AppButton } from '../components/AppButton'
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined'

import EmptyPlaceholder from '../components/EmptyPlaceholder'
import { useSelector } from 'react-redux'
import { RootState } from '../store'
import classes from './ProfilePage.module.css'
import ProfileListItem from '../components/ProfileListItem'
import { useNavigate } from 'react-router-dom'

const ProfilePage = () => {
  const profiles = useSelector((state:RootState)=>state.profile)
  const navigate = useNavigate()

  return (
    <div className={classes.container}>
      <h3>Profile</h3>
      {profiles && profiles.length > 0 ? profiles.map(profile => <ProfileListItem {...profile} key={profile.email}/>) : <EmptyPlaceholder />}
      <AppButton
        className={classes.addProfileButton}
        title='New Profile'
        icon={<AddCircleOutlineOutlinedIcon />}
        onClick={()=>navigate('/edit-profile')}
      />
    </div>
  )
}

export default ProfilePage

