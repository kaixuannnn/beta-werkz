import AppInput from '../components/AppInput'
import styled from 'styled-components'

export const LoginPage = () => {
  return (
    <Container>
      <div>
        <BackgroundImg src='/images/bg-1.png' alt='background' />
        <h1>Login</h1>
        <h4>Welcome back!</h4>
        <AppInput placeholder='username' />
        <AppInput placeholder='Password' />
        <BackgroundImgEnd src='/images/bg-1.png' alt='background' />
      </div>
    </Container>
  )
}


const BackgroundImg = styled.img`
  position: absolute;
  left: 0;
`

const BackgroundImgEnd = styled.img`
  position: absolute;
  transform: rotate(180deg);
  right: 0;
`

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
`