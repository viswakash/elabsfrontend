import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../assets/Elabs logo black.png';
import '../components/home.css';

const Navbar = () => {
  return (
    <nav class='navbar navbar-expand-lg navbar-light bg-light py-3'>
      <div class='container'>
        <img src={Logo} height='42' />
        <Link
          to='/'
          className='navbar-brand d-flex align-items-center text-dark'
        >
          <strong>
            <div style={{ marginLeft: '22px', fontWeight: 400 }}>E LABS</div>
          </strong>
        </Link>
        <button
          type='button'
          data-toggle='collapse'
          data-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
          class='navbar-toggler'
        >
          <span class='navbar-toggler-icon'></span>
        </button>
        <div id='navbarSupportedContent' class='collapse navbar-collapse'>
          <ul class='navbar-nav ml-auto'>
            <li class='nav-item '>
              <Link
                to='/'
                className='nav-link  text-dark'
                style={{ fontFamily: 'sans-serif' }}
              >
                HOME
              </Link>
            </li>
            <li class='nav-item '>
              <Link
                to='/register'
                className='nav-link  text-dark'
                style={{ fontFamily: 'sans-serif' }}
              >
                <b>Book</b>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
