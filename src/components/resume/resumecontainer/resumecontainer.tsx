import React from 'react';
import style from './resumecontainer.module.css';
import { Title } from 'components/resume/title/title';

export const Resume: React.FC = () => {
	return (
		<>
			<div className={style.resumeContainer}>
				<div className={style.resumeContent}>
					<Title />
				</div>
			</div>
		</>
	)


}
