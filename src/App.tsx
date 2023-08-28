
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
function App() {
  const {pathname} = useLocation()
  const dispatch = useDispatch<AppDispatch>()

  useEffect(() => {
    dispatch(fetchProfileData())
  }, [dispatch])
  
  return (
    <div className={classes.container}>
      {pathname !== '/login' && pathname !== '/' && <AppHeader username='Joanne' />}
      <Wrapper>
        <Routes>
          <Route
            path='/'
            element={<LoginPage />}
          />
          <Route path='/login' element={<LoginPage />} />

          <Route path='/profile' element={<ProfilePage />} />

          <Route path='/edit-profile' element={<EditProfilePage />} />
          <Route path='/edit-profile/:username' element={<EditProfilePage />} />
        </Routes>
      </Wrapper>
      <ThemeButton />
    </div>
  )
}

export default App;
