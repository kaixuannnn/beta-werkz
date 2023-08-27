
import { AppButton } from '../components/AppButton'
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined'

import EmptyPlaceholder from '../components/EmptyPlaceholder'
import { useSelector } from 'react-redux'
import { RootState } from '../store'
import classes from './ProfilePage.module.css'

const ProfilePage = () => {
  const profiles = useSelector((state:RootState)=>state.profile)
  return (
    <div className={classes.container}>
      <h3>Profile</h3>
      {profiles && profiles.length > 0 ? <></> : <EmptyPlaceholder />}
      <AppButton
        className={classes.addProfileButton}
        title='New Profile'
        icon={<AddCircleOutlineOutlinedIcon />}
      />
    </div>
  )
}

export default ProfilePage

