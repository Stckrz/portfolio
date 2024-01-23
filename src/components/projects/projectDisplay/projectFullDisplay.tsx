import React from 'react';
import style from './projectFullDisplay.module.css';

interface ProjectFullDisplayProps {
	name: string;
	color: string;
}

export const ProjectFullDisplay: React.FC<ProjectFullDisplayProps> = ({ name, color }) => {

	return (
		<>
			<div
				style={{backgroundColor: color}}
				className={style.projectFulllDisplayWrapper}>
			</div>
			<div className={style.projectName}>{name}</div>
		</>
	)
}
