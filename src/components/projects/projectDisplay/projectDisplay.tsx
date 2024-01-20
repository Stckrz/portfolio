import React from 'react';
import style from './projectDisplay.module.css';

interface ProjectDisplayProps {
	color: string;
}

export const ProjectDisplay: React.FC<ProjectDisplayProps> = ({ color }) => {

	return (
		<>
			<div
				style={{backgroundColor: color}}
				className={style.projectDisplayWrapper}>
			</div>
			<div>projectName</div>
		</>
	)
}
