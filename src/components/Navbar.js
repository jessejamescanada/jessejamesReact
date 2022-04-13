import React from 'react'
import {useNavigate} from 'react-router-dom'
import logo from '../img/jesse_james_photography.png'


function Navbar() {
    const navigate = useNavigate()

  return (
    <>
    <div className="navbar">
        <a onClick={() => navigate('/')} className='navbar-logo'><img src={logo} alt="" /></a>

        <ul className="desktop-nav">

            <li onClick={() => navigate('/')}><a>Home</a></li>
            <li onClick={() => navigate('/weddings')}><a>Weddings</a></li>
            <li onClick={() => navigate('/families')}><a>Families</a></li>
            <li onClick={() => navigate('/real-estate')}><a>Real Estate</a></li>
            <li onClick={() => navigate('/investment')}><a>Investment</a></li>
            <li onClick={() => navigate('/contact')}><a href='#contact'>Contact</a></li>
        </ul>
    </div>

    <div className="collapsible-menu">
              <input type="checkbox" id="collapse" />
          <label htmlFor="collapse">Menu</label>
          <div className="menu-content">
          <ul className="mobile-nav">
            <li onClick={() => navigate('/')}><a>Home</a></li>
            <li onClick={() => navigate('/weddings')}><a>Weddings</a></li>
            <li onClick={() => navigate('/families')}><a>Families</a></li>
            <li onClick={() => navigate('/real-estate')}><a>Real Estate</a></li>
            <li onClick={() => navigate('/investment')}><a>Investment</a></li>
            <li onClick={() => navigate('/contact')}><a href='#contact'>Contact</a></li>
            </ul>
          </div>
    </div>
    </>
  )
}

export default Navbar