import './App.css';
import { Route, Routes, useLocation } from 'react-router-dom';
import { LoginPage } from './pages/LoginPage';
import ProfilePage from './pages/ProfilePage';
import EditProfilePage from './pages/EditProfilePage';
import AppHeader from './components/AppHeader';
import Wrapper from './components/Wrapper';
import { useEffect, useLayoutEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProfileData } from './store/profile-actions';
import { AppDispatch } from './store';

function App() {
  const {pathname} = useLocation()
  const dispatch = useDispatch<AppDispatch>()

  useEffect(() => {
    dispatch(fetchProfileData())
  }, [dispatch])
  
  return (
    <div>
      {pathname !== '/login' && <AppHeader username='Joanne' />}
      <Wrapper>
        <Routes>
          <Route path='/login' element={<LoginPage />} />

          <Route path='/profile' element={<ProfilePage />} />

          <Route path='/edit-profile' element={<EditProfilePage />} />
          <Route path='/edit-profile/:email' element={<EditProfilePage />} />
        </Routes>
      </Wrapper>
    </div>
  )
}

export default App;
