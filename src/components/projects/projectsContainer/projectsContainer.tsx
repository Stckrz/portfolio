import style from './projectsContainer.module.css';
import { MdOutlinePlayArrow } from 'react-icons/md';

import { useState, useContext } from 'react';
import { CurrentPage } from 'pages/home/home';
import { ProjectDisplay } from 'components/projects/projectDisplay/projectDisplay';

export const Projects: React.FC = () => {
	const { setPage } = useContext<any>(CurrentPage);

	return (
		<>
			<div className={style.projectsWrap}>
				<div className={style.backButtonBox} onClick={() => { setPage('Contents') }}>
					<div className={style.backButton}><MdOutlinePlayArrow size={"3em"} /></div>
				</div>
				<div className={style.projectsContainer} >
					<ProjectDisplay color={"blue"} />
					<ProjectDisplay color={"red"} />


				</div>
			</div>
		</>
	)
}
