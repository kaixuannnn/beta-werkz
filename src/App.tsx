import './App.css';
import { Route, Routes, useLocation } from 'react-router-dom';
import { LoginPage } from './pages/LoginPage';
import ProfilePage from './pages/ProfilePage';
import EditProfilePage from './pages/EditProfilePage';
import AppHeader from './components/AppHeader';
import Wrapper from './components/Wrapper';

function App() {
  const {pathname} = useLocation()
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
