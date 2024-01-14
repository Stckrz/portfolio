import React from 'react';
import style from './skillsview.module.css';

import { SkillDropdown } from './skilldropdown/skilldropdown';

import { skillsArray } from 'library/skillsetObject';


export const Skills: React.FC = () => {
	return (
		<>
			<div className={style.skillsContainer}>
				{skillsArray.map((item) => {
					return (
						<SkillDropdown icon={item.icon} title={item.title} description={item.description} />
					)
				})
				}
			</div>
		</>
	)
}
