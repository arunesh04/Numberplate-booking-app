import React, { useState } from 'react';
import axios from 'axios';
import '../pages/cssfiles/Userlogin.css';
import loginImage from '../images/login.avif';
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const UserLogin = () => {
  const navigation = useNavigate();
  const [name,setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  console.log(name)
  console.log(email)

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };


  

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
            const response = await axios.get(`http://localhost:5000/api/user/get/${name}`);
            if(response.data.email === email && response.data.password === password){
                console.log(response.data)
                localStorage.setItem('emailu', email);
                localStorage.setItem('nameu',name)
                localStorage.setItem('mobnou',response.data.mobno)
                localStorage.setItem('cityu', response.data.city);
                localStorage.setItem('regionu', response.data.region);
                window.location.href = '/homeadmin';
                navigation('/homeadmin')
            }
            else{
                toast('Invalid Credintials');
            }
        } 
        catch (err) {
            
        }
  };

  return (
    <>
    <div className="con">
      <div className="registration-form">
        <div className="image-con">
          <img src={loginImage} alt="Registration" />
        </div>
        <div className="form-con">
          <h2>Login</h2>
          
          <form onSubmit={handleSubmit}>
          <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
          <label htmlFor="password">Password</label>
          <div className="password-input">
            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <input
              type="checkbox"
              id="showPassword"
              checked={showPassword}
              onChange={togglePasswordVisibility}
            />
            <label htmlFor="showPassword">Show Password</label>
          </div>
        </div>

            <button type="submit" className='btn'>Login</button>
          </form>
          <div className="new-user-con">
            <p>New User? <Link to="/userregis">Register</Link></p>
          </div>
        </div>
      </div>
    </div>
    <ToastContainer/>
    </>
  );
};

export default UserLogin;
