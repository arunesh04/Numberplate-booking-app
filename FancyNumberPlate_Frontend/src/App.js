import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
}from 'react-router-dom'
import HomePage from './pages/Start';
import UserLogin from './pages/UserLogin';
import AdminLogin from './pages/Adminlogin';
import UserRegistration from './pages/UserRegistration';
import AdminRegistrationPage from './pages/AdminRegistraion';
import UserRegistrationSucess from './pages/UserRegistrationSucess';
import AdminRegistrationSucess from './pages/AdminRegistrationSucess';
import Userhome from './pages/Userhome';






function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage/>}></Route>
        <Route path='/userlogin' element={<UserLogin/>}></Route>
        <Route path='/adminlogin' element={<AdminLogin/>}></Route>
        <Route path='/userregis' element={<UserRegistration/>}></Route>
        <Route path='/adminregis' element={<AdminRegistrationPage/>}></Route>
        <Route path='/userregissuccess' element={<UserRegistrationSucess/>}></Route>
        <Route path='/adminregissuccess' element={<AdminRegistrationSucess/>}></Route>
        <Route path='/userhome' element={<Userhome/>}></Route>

        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
