import React, { useEffect } from 'react';
import './modals.css';
import { gsap } from 'gsap';
function Home() {
  useEffect(() => {
    gsap.from('.one', { x: -1000, duration: 1.2 });
    gsap.from('.two', { y: -1000, duration: 1.2, delay: 1.2 });
  });
  return (
    <div>
      <div className='wrapper'>
        <div className='one'>E-</div>
        <div className='two'>Labs</div>
      </div>
    </div>
  );
}

export default Home;
