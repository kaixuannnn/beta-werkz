import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import classes from './AppHeader.module.css'
import { useNavigate } from 'react-router-dom';
import useScreenWidth from '../hooks/useScreenWidth';
import { screenSizes } from '../utils/breakpoints';


interface HeaderProps {
    username: string
}

const AppHeader = (props: HeaderProps) => {
  const navigate = useNavigate()
  const screenWidth = useScreenWidth();

  return (
    <div className={classes.container}>
      <ArrowBackIcon onClick={() => navigate(-1)}/>
      <div className={classes.user}>
        <PermIdentityIcon />
        <div>{props.username}</div>
      </div>
     {screenWidth < screenSizes.mobile ? <img
        src='images/color-theme.png'
        alt='change theme'
        width="20"
        height="20"
      />: <div></div>}
    </div>
  )
}



export default AppHeader