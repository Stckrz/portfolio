import React from 'react';
import { useState } from 'react';
import style from './skilldropdown.module.css';

interface SkillDropdownProps {
	icon: any,
	title?: string,
	description?: string,
}

export const SkillDropdown: React.FC<SkillDropdownProps> = ({ icon, description = "hi", title }) => {
	const [showDescription, setShowDescription] = useState(false)
	function showDescriptionHandler() {
		setShowDescription(!showDescription)

	}
	return (
		<>
			<div className={style.iconContainer}>
				<div className={title === 'React' ? style.reactIcon : style.actualIcon} onClick={showDescriptionHandler}>{icon}</div>
				<div>{title}</div>
				<div className={style.descriptionContainer}>
				{showDescription &&
					<div className={style.descriptionContainer}>{description}</div>
				}
				</div>
			</div>
		</>
	)
}
