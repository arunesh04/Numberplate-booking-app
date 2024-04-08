import React, { useState } from 'react';
import axios from 'axios';
import { Link,useNavigate } from 'react-router-dom';
import '../pages/cssfiles/Adminregistration.css';
import imageregis from '../images/adminregis.jpg'

const AdminRegistrationPage = () => {
  const navigation = useNavigate();
  const [adminid, setadminid] = useState('');
  const [name, setName] = useState('');
  const [mobno, setmobno] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [city, setCity] = useState('');
  const [region, setRegion] = useState('');

  const handleRegister = async (event) => {
    event.preventDefault();

    try {
      // Prepare the data object to be sent
      const adminData = {
        adminid,
        name,
        mobno,
        password,
        city,
        region,
        
      };

      const response = await axios.post('http://localhost:5000/api/admin', adminData);

      console.log(response.data); 

      setadminid('');
      setName('');
      setmobno('');
      setPassword('');
      setCity('');
      setRegion('');
      navigation('/adminregissuccess');

    } catch (error) {
      console.error(error);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="containers">
      <div className="registration-form">
        <div className="image-containers">
          <img src={imageregis} alt="Registration" />
        </div>
        <div className="form-containers">
          <h2>Admin Registration</h2>
          <form onSubmit={handleRegister}>
            <div className="form-group">
              <label htmlFor="adminid">Admin ID</label>
              <input
                type="text"
                id="adminid"
                value={adminid}
                onChange={(e) => setadminid(e.target.value)}
                required
              />
            </div>
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
              <label htmlFor="mobno">Mobile Number</label>
              <input
                type="number"
                id="mobno"
                value={mobno}
                onChange={(e) => setmobno(e.target.value)}
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
            <div className="form-group">
              <label htmlFor="city">City</label>
              <input
                type="text"
                id="city"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="region">Region</label>
              <input
                type="text"
                id="region"
                value={region}
                onChange={(e) => setRegion(e.target.value)}
                required
              />
            </div>
            <button type="submit" className='but'>Register</button>
          </form>
          <div className="sign-in-container">
          <p>Already a User? Sign In</p>
          <Link to="/adminlogin">Sign In</Link>
        </div>
        </div>
        
      </div>
    </div>
  );
};

export default AdminRegistrationPage;
