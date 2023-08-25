import './App.css';
import { Route, Routes, useLocation } from 'react-router-dom';
import { LoginPage } from './pages/LoginPage';
import ProfilePage from './pages/ProfilePage';
import EditProfilePage from './pages/EditProfilePage';
import AppHeader from './components/AppHeader';

function App() {
  const {pathname} = useLocation()
  return (
    <div>
      {pathname !=='/login' && <AppHeader username='Joanne'/>   }
      <Routes>
        <Route path='/login' element={<LoginPage />} />
        <Route path='/profile' element={<ProfilePage />} />
        <Route path='/edit-profile' element={<EditProfilePage />}/>
      </Routes>
    </div>
  )
}

export default App;
