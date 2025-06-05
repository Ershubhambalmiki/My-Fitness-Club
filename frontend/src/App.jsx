
import './App.css';
import Home from './components/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavbarHeader from './components/NavbarHeader';
import Blog from './components/Blog'
import SingIn from './components/SignIn';
import ForgotPassword from './components/ForgotPassword';
import SignUp from './components/SignUp';
import About from './components/About';
import ContactUs from './components/ContactUs';
import Userinfo from './components/Userinfo';



function App() {
  return (
    <>
      <BrowserRouter>
        <NavbarHeader />
        
        <Routes>
          <Route element={<Home />} path='/'/>
          <Route element={<Blog />} path='/blog'/>
          <Route element={<SingIn />} path='/signin'/>
          <Route element={<ForgotPassword />} path='/forgotpassword'/>
          <Route element={<SignUp/>} path='/signup'/>
          <Route element={<About/>}path='/about'/>
          <Route element={<ContactUs/>}path='/contactus'/>
          <Route element={<Userinfo/>}path='/userinfo'/>
        </Routes>
      
      </BrowserRouter>
    </>
  );
}

export default App;
