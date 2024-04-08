import React from 'react';
import { Link } from 'react-router-dom';
import '../pages/cssfiles/Start.css'; 
import car from '../images/carstart.gif'

const HomePage = () => {
    return (
      <div className="cons">
        <div className="content">
          <div className="car-cons">
            <img src={car} alt="Car" className="car-image" />
          </div>
          <div className="button-cons">
            <Link to="/adminlogin" className="button admin-button">
              Login as Admin
            </Link>
            <Link to="/userlogin" className="button user-button">
              Login as User
            </Link>
          </div>
        </div>
      </div>
    );
  };
  
  export default HomePage;
  
