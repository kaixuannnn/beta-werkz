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
        <AppInput className={classes['item-1']} placeholder='Enter Username' title='Name'></AppInput>
        <AppInput className={classes['item-2']} placeholder='Enter number' title='Age'></AppInput>
        <AppSelect className={classes['item-3']} />
        <AppInput className={classes['item-4']} placeholder='Enter email address' title='Email'></AppInput>
      </div>
      <AppButton className={classes.addprofilebutton}
        title='New Profile'
        icon={<AddCircleOutlineOutlinedIcon />}
      />
    </div>
  )
}

export default EditProfilePage

