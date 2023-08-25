import { AppButton } from '../components/AppButton'
import AppInput from '../components/AppInput'
import styled from 'styled-components'

export const LoginPage = () => {
  return (
    <Container>
      <BackgroundImg src='/images/bg-1.png' alt='background' />
      <div>
        <h1>Login</h1>
        <h4>Welcome back!</h4>
        <AppInput placeholder='username' />
        <AppInput placeholder='Password' />
        <AppButton title="Login" />
      </div>
      <BackgroundImgEnd src='/images/bg-1.png' alt='background' />
    </Container>
  )
}


const BackgroundImg = styled.img`
  position: absolute;
  left: 0;
  top:0;
`

const BackgroundImgEnd = styled.img`
  position: absolute;
  transform: rotate(180deg);
  right: 0;
  bottom: 0;
`

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
`