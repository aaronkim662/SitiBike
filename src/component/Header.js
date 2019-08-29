import React from 'react';
import { Link } from 'react-router-dom'

function Header(){
  return (
    <nav className='headerNav' >
        <ul><Link to='/' className='ulist'>Home</Link ></ul>
        <ul><Link to="/Search" className='ulist'>Searching For a Bike</Link></ul>
    </nav>
  )
}
export default Header;
