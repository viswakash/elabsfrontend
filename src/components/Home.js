import React, { useEffect } from 'react';
import './home.css';
import { gsap } from 'gsap';
import Logo from '../assets/Elabs logo black.png';
import { Link } from 'react-router-dom';
function Home() {
  useEffect(() => {
    if (window.innerWidth >= 768) {
      gsap.from('.one', { flex: 0, x: -1000, duration: 1.2 });
      gsap.from('.two', { flex: 5, duration: 1.2, delay: 1.6 });
      gsap.from('.overflow', { y: -1000, duration: 1.2, delay: 2.4 });
      gsap.from('.h6', { y: -100, duration: 1.2, delay: 2.4, opacity: 0 });
      gsap.from('.h1', { y: -100, duration: 1.2, delay: 3.6, opacity: 0 });
      gsap.from('button', { x: -400, duration: 1.2, delay: 3.6, opacity: 0 });
    }
  });
  return (
    <div>
      <div className='wrapper'>
        <div className='one'>
          <div className='heading'>
            <h6 className='h6'>Become a part of</h6>
            <h1 className='h1'>E LABS</h1>
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
