import style from './navbarIcon.module.css';
// import maddie from 'assets/images/maddie.jpg'

export const NavbarIcon: React.FC = () => {
	return (
		<>
			<div className={style.navbarIconContainer}>
				<img className={style.navbarIconImage} src={require(`assets/images/maddie.jpg`)} />
			</div>

		</>
	)
}
