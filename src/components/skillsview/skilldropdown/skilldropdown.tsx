import React from 'react';
import style from './skilldropdown.module.css';

interface SkillDropdownProps {
	icon: any,
	title?: string,
	description: string,
}

export const SkillDropdown: React.FC<SkillDropdownProps> = ({ icon, title, description }) => {
	return (
		<>
				<div className={style.skillContainer}>
			<div className={style.iconContainer}>
					<div className={title === 'React' ? style.reactIcon : style.actualIcon}>{icon}</div>
				</div>
				<div className={style.skillDescriptionBox}>
					<div className={style.skillTitle}>{title}</div>
					<div className={style.skillDescription} >{description}</div>
				</div>
			</div>
		</>
	)
}
