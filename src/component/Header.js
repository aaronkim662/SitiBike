import React from 'react';
import { Link } from 'react-router-dom'

function Header(){

  return (
    <nav className='headerNav' >
        <ul><Link to='/' className='uList'>Home</Link ></ul>
        <ul><Link to="/Search" className='uList'>Search For a Bike</Link></ul>
    </nav>
  )
}
export default Header;
