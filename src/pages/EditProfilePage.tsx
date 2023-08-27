import AppInput from '../components/AppInput'
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined'
import AppSelect from '../components/AppSelect'

import classes from './EditProfilePage.module.css'
import { AppButton } from '../components/AppButton'

const EditProfilePage = () => {
  return (
    <div>
      <h4>New Profile</h4>
      <div className={classes.grid}>
        <AppInput placeholder='Enter Username' title='Name'></AppInput>
        <AppInput placeholder='Enter number' title='Enter Number'></AppInput>
        <AppSelect />
        <AppInput placeholder='Enter email address' title='Email'></AppInput>
      </div>
      <AppButton className={classes.addProfileButton}
        title='New Profile'
        icon={<AddCircleOutlineOutlinedIcon />}
      />
    </div>
  )
}

export default EditProfilePage

