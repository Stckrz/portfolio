import React from 'react';
import style from './navbar.module.css';
import { Link } from 'react-router-dom';
import { NavbarIcon } from 'components/navbar/navbarIcon/navbarIcon';

export const Navbar: React.FC = () => {



	return (
		<>
			<div className={style.navbarContainer}>
				<NavbarIcon />
				<div className={style.linksContainer}>
					<Link to="home">home</Link>
				</div>
			</div>
		</>
	)
}
