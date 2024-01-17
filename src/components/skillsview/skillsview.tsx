import React from 'react';
import { useState } from 'react';
import style from './skillsview.module.css';
import { MdOutlinePlayArrow } from 'react-icons/md';


import { useContext } from 'react';
import { CurrentPage } from 'pages/home/home';

import { SkillDropdown } from './skilldropdown/skilldropdown';

import { skillsArray } from 'library/skillsetObject';


export const Skills: React.FC = () => {
	const { setPage } = useContext<any>(CurrentPage)
	const [isMounted, setIsMounted] = useState(true);

	function handleFadeOut() {
		setIsMounted(!isMounted)
		setTimeout(() => {
			setPage('Contents')
		}, 250);
	}

	return (
		<>
			<div className={isMounted ? style.skillWrapIn: style.skillWrapOut}>
				<div className={style.backButton} onClick={() => { handleFadeOut() }}>
					<MdOutlinePlayArrow size={"3em"} />
				</div>
				<div className={style.skillsContainer}>
					{skillsArray.map((item) => {
						return (
							<SkillDropdown icon={item.icon} title={item.title} description={item.description} />
						)
					})
					}
				</div>
			</div>
		</>
	)
}
