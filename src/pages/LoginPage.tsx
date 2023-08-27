import { AppButton } from '../components/AppButton'
import AppInput from '../components/AppInput'
import classes from './LoginPage.module.css'

export const LoginPage = () => {
  return (
    <div className={classes.container}>
      <img className={classes.backgroundImg} src='/images/bg-1.png' alt='background' />
      <div>
        <h1>Login</h1>
        <h4>Welcome back!</h4>
        <AppInput placeholder='username' id='username' />
        <AppInput placeholder='Password' id='pasword'/>
        <AppButton title="Login" />
      </div>
      <img className={classes.backgroundImgEnd} src='/images/bg-1.png' alt='background' />
    </div>
  )
}
