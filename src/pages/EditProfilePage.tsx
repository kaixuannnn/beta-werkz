import AppInput from '../components/AppInput'
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined'
import AppSelect from '../components/AppSelect'

import classes from './EditProfilePage.module.css'
import { AppButton } from '../components/AppButton'
import {Formik, Form} from 'formik'
import { useDispatch } from 'react-redux'
import { profileAction } from '../store/profile-slice'
import { useNavigate } from 'react-router-dom'

interface FormValues{
  username: string;
  age: string;
  gender: string;
  email: string;
}

const EditProfilePage = () => {
  const initialValues: FormValues = {
    username: '',
    age: '',
    gender: 'F',
    email: ''
  }
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const addNewProfileHandler =(value: FormValues)=>{
    dispatch(profileAction.addNewProfile(value))
    navigate('/profile')
  }
  return (
    <div>
      <h4>New Profile</h4>
      <Formik
        initialValues={initialValues}
        onSubmit={(values, actions) => {
          console.log({ values, actions })
          addNewProfileHandler(values);
          actions.setSubmitting(false)
        }}
      >
        <Form>
          <div className={classes.grid}>
            <AppInput
              className={classes['item-1']}
              placeholder='Enter Username'
              id='username'
              title='Name'
            ></AppInput>
            <AppInput
              className={classes['item-2']}
              placeholder='Enter number'
              id='age'
              title='Age'
            ></AppInput>
            <AppSelect
              className={classes['item-3']}
              id='gender'
              title='Gender'
              items={[{ title: 'Female', value: 'F' }, {title: 'Male', value: 'M'}]}
            />
            <AppInput
              className={classes['item-4']}
              placeholder='Enter email address'
              id='email'
              title='Email'
            ></AppInput>
          </div>
          <AppButton
            className={classes.addprofilebutton}
            title='New Profile'
            icon={<AddCircleOutlineOutlinedIcon />}
            type="submit"
          />
        </Form>
      </Formik>
    </div>
  )
}

export default EditProfilePage

