import styled from 'styled-components'
import AppInput from '../components/AppInput'
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined'
import { AppButton } from '../components/AppButton'
import AppSelect from '../components/AppSelect'

const EditProfilePage = () => {
  return (
    <div>
      <h4>New Profile</h4>
      <Grid>
        <AppInput placeholder='Enter Username' title='Name'></AppInput>
        <AppInput placeholder='Enter number' title='Enter Number'></AppInput>
        <AppSelect />
        <AppInput placeholder='Enter email address' title='Email'></AppInput>
      </Grid>
      <AddProfileButton
        title='New Profile'
        icon={<AddCircleOutlineOutlinedIcon />}
      />
    </div>
  )
}

export default EditProfilePage

const Grid = styled.div`
    display: grid;
    flex-direction: column;
`

const AddProfileButton = styled(AppButton)`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  margin: 10px;
`