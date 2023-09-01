
import { Route, Routes, useLocation } from 'react-router-dom';
import { LoginPage } from './pages/LoginPage';
import ProfilePage from './pages/ProfilePage';
import EditProfilePage from './pages/EditProfilePage';
import AppHeader from './components/AppHeader';
import Wrapper from './components/Wrapper';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchProfileData } from './store/profile-actions';
import { AppDispatch } from './store';
import ThemeButton from './components/ThemeButton';
import classes from './App.module.css'
import useScreenWidth from './hooks/useScreenWidth';
import { screenSizes } from './utils/breakpoints';
function App() {
  const {pathname} = useLocation()
  const dispatch = useDispatch<AppDispatch>()
  const screenWidth = useScreenWidth()

  useEffect(() => {
    dispatch(fetchProfileData())
  }, [dispatch])
  
  return (
    <div className={classes.container}>
      {pathname !== '/login' && pathname !== '/' && (
        <AppHeader username='Joanne' />
      )}
      <Wrapper>
        <Routes>
          <Route path='/' element={<LoginPage />} />
          <Route path='/login' element={<LoginPage />} />

          <Route path='/profile' element={<ProfilePage />} />

          <Route path='/edit-profile' element={<EditProfilePage />} />
          <Route path='/edit-profile/:username' element={<EditProfilePage />} />
        </Routes>
      </Wrapper>
      {screenWidth > screenSizes.mobile && <ThemeButton />}
    </div>
  )
}

export default App;
