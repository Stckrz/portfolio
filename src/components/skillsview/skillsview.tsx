import React from 'react';
import { useState, useContext } from 'react';
import { CurrentPage } from 'pages/home/home';

import style from './skillsview.module.css';
import animationStyle from 'library/animationstyles.module.css';
import { handleFadeOut } from 'library/animationfunctions';

import { BackButton } from 'components/backButton/backButton';
import { SkillDropdown } from './skilldropdown/skilldropdown';

import { skillsArray } from 'library/skillsetObject';


export const Skills: React.FC = () => {
	const { setPage } = useContext<any>(CurrentPage)
	const [isMounted, setIsMounted] = useState(true);

	return (
		<>
			<div className={isMounted ? animationStyle.componentFadeIn : animationStyle.componentFadeOut}>
				<div className={style.skillWrap}>
					<div onClick={() => { handleFadeOut(isMounted, setIsMounted, setPage) }}>
						<BackButton />
					</div>
					<div className={style.skillsContainer}>
						{skillsArray.map((item) => {
							return (
								<SkillDropdown icon={item.icon} title={item.title} />
							)
						})
						}
					</div>
				</div>
			</div>
		</>
	)
}
