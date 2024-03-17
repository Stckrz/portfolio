import React, { SetStateAction } from 'react';
import style from './skilldropdown.module.css';

interface SkillDropdownProps {
	icon: any,
	title?: string,
	description: string,
	setShownDescription: React.Dispatch<SetStateAction<string>>
}

export const SkillDropdown: React.FC<SkillDropdownProps> = ({ icon, title, description, setShownDescription }) => {

	return (
		<>
				<div className={style.skillContainer} onClick={() => { setShownDescription(description) }}>
					<div className={style.iconContainer}>
						<div className={title === 'React' ? style.reactIcon : style.actualIcon}>{icon}</div>
						<div className={style.skillTitle}>{title}</div>
					</div>
				</div>
		</>
	)
}
