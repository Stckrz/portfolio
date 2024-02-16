import React from 'react';
import style from './skilldropdown.module.css';

interface SkillDropdownProps {
	icon: any,
	title?: string,
}

export const SkillDropdown: React.FC<SkillDropdownProps> = ({ icon, title }) => {
	return (
		<>
				<div className={style.skillTitleBox}>
			<div className={style.iconContainer}>
					<div className={title === 'React' ? style.reactIcon : style.actualIcon}>{icon}</div>
					<div>{title}</div>
				</div>
				<div className={style.skillDescriptionBox}>
					<div>this is a description about the stuff..</div>
				</div>
				
			</div>
		</>
	)
}
