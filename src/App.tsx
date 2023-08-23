import './App.css';
import { Route, Routes } from 'react-router-dom';
import { LoginPage } from './pages/LoginPage';
import ProfilePage from './pages/ProfilePage';
import EditProfilePage from './pages/EditProfilePage';
import ProfileListItem from './components/ProfileListItem';

function App() {
  return (
    <div>
      <ProfileListItem name="Sam" gender='female' age='42' email='tifannny@gmail.com'/>
      <Routes>
        <Route path='/login' element={<LoginPage />} />
        <Route path='/profile' element={<ProfilePage />} />
        <Route path='/edit-profile' element={<EditProfilePage />}/>
      </Routes>
    </div>
  )
}

export default App;
