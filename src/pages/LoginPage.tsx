import { Formik , Form} from 'formik';
import { AppButton } from '../components/AppButton'
import AppInput from '../components/AppInput'
import classes from './LoginPage.module.css'
import {  useNavigate } from 'react-router-dom';

interface FormValues{
  username: string;
  password: string;
}

const initialValues: FormValues = {
  username: '',
  password: ''
}


export const LoginPage = () => {
  const navigate = useNavigate()
  const loginHandler = (value: FormValues) => {
    navigate('/profile')
  }
  return (
    <div className={classes.container}>
      <img
        className={classes.backgroundImg}
        src='/images/bg-1.png'
        alt='background'
      />
      <div>
        <h1>Login</h1>
        <h4>Welcome back!</h4>
        <Formik
          initialValues={initialValues}
          onSubmit={(values, actions) => {
            loginHandler(values)
            actions.setSubmitting(false)
          }}
        >
          <Form>
            <AppInput placeholder='username' id='username' />
            <AppInput placeholder='Password' id='pasword' />
            <AppButton title='Login' type='submit' />
          </Form>
        </Formik>
      </div>
      <img
        className={classes.backgroundImgEnd}
        src='/images/bg-1.png'
        alt='background'
      />
    </div>
  )
}
