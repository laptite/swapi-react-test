import React from 'react';
import logo from './logo.svg';
import NavList from './NavList.js'
import './Header.css'

const Header = ({ resources, selection }) => {
	return (
		<div className="section-header navbar">
  		<div className="nav-header">
    		<a href="/" className="navbar-logo">
    			<img src={logo} className="logo" alt="logo" />
    		</a>
				<NavList resources={resources} selection={selection}/>
  		</div>
		</div>
	);
}

export default Header;