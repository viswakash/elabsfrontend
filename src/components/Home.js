import React, { useEffect } from 'react';
import './home.css';
import { gsap } from 'gsap';
import Logo from '../assets/Elabs logo black.png';
import { Link } from 'react-router-dom';
function Home() {
  // useEffect(() => {
  //   gsap.from('.one', { x: -1000, duration: 1.2 });
  //   gsap.from('.two', { y: -1000, duration: 1.2, delay: 1.2 });
  // });
  return (
    <div>
      <div className='wrapper'>
        <div className='one'>
          <div className='heading'>
            <h6>Become a part of</h6>
            <h1>E LABS</h1>
            <button>
              <Link to='/register'>REGISTER</Link>
            </button>
          </div>
        </div>
        <div className='two'>
          <div className='overflow'>
            <img src={Logo}></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
