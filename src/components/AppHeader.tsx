import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import styled from 'styled-components';


interface HeaderProps {
    username: string
}

const AppHeader = (props: HeaderProps) => {
  return (
    <Container>
      <ArrowBackIcon />
      <UserContainer>
        <PermIdentityIcon />
        <div>{props.username}</div>
      </UserContainer>
      <img
        src='images/color-theme.png'
        alt='change theme'
        width="20"
        height="20"
      />
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 45px;
  border-bottom: 1px transparent solid;
  padding: 0 10px;
  border-radius: 10px 10px;
  box-shadow: 0px 3px 6px #70707029;
`

const UserContainer = styled.div`
    display:flex;
    flex-direction: row;
    align-items: center;
`

export default AppHeader