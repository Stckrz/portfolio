import React from 'react';
import style from './navbar.module.css';
import { Link } from 'react-router-dom';

export const Navbar: React.FC = () => {



	return(
		<>
			<div className={style.navbarContainer}>
				<Link to="home">home</Link>
				<Link to="skills">skills</Link>
			</div>
		</>
	)
}
