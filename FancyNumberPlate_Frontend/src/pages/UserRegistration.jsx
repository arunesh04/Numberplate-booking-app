import React, { useState } from 'react';
import '../pages/cssfiles/UserRegistration.css';
import axios from 'axios';
import regisimage from '../images/registeruser.avif'
import { Link , useNavigate} from 'react-router-dom';


const UserRegistration = () => {
  const navigation = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobno, setMobNo] = useState('');
  const [password, setPassword] = useState('');
  const [city, setCity] = useState('');
  const [region, setRegion] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleRegistration = async(event) => {
    event.preventDefault();
    try {
      const userData = {
        name,
        email,
        mobno,
        password,
        city,
        region,
      };

      const response = await axios.post('http://localhost:5000/api/user', userData);
      console.log(response.data);
      
      setName('');
      setEmail('');
      setMobNo('');
      setPassword('');
      setCity('');
      setRegion('');
      navigation('/userregissuccess')

    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="containers">
      <div className="registration-form">
        <div className="image-containers">
          <img src={regisimage} alt="Registration" />
        </div>
        <div className="form-containers">
          <h2>Register</h2>
          <form onSubmit={handleRegistration}>
            <div className="form-groups">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="form-groups">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-groups">
              <label htmlFor="mobno">Mobile Number</label>
              <input
                type="tel"
                id="mobno"
                value={mobno}
                onChange={(e) => setMobNo(e.target.value)}
                required
              />
            </div>
            <div className="form-groups">
              <label htmlFor="password">Password</label>
              <div className="password-inputs">
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
            <div className="form-groups">
              <label htmlFor="city">City</label>
              <input
                type="text"
                id="city"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                required
              />
            </div>
            <div className="form-groups">
              <label htmlFor="region">Region</label>
              <input
                type="text"
                id="region"
                value={region}
                onChange={(e) => setRegion(e.target.value)}
                required
              />
            </div>
            <br />
            <button type="submit" className='but'>Register</button>
          </form>
          <div className="sign-in-container">
          <p>Already a User? Sign In</p>
          <Link to="/userlogin">Sign In</Link>
        </div>
        </div>
      </div>
    </div>
  );
};

export default UserRegistration;
