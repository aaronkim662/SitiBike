import React from 'react';
import { Link } from 'react-router-dom'

let ulStyle = {
listStyle : 'none',
color : 'white',
textDecoration : 'none'
}

let navStyle = {
display : 'flex',
alignItems: 'center',
width : '100vw',
height : '50px',
padding : '0 20px',
}

function Header(){
  return (
    <nav style={navStyle}>
        <ul style={ulStyle}><Link to='/home'>Home</Link></ul>
        <ul style={ulStyle}><Link to="/about">About</Link></ul>
        <ul style={ulStyle}><Link to="/Search">Search For a Bike</Link></ul>
    </nav>
  )
}
export default Header;
