import React from 'react';
import style from './projectThumbnailDisplay.module.css';

interface ProjectThumbnailDisplayProps {
	name: string;
	color: string;
}

export const ProjectThumbnailDisplay: React.FC<ProjectThumbnailDisplayProps> = ({ name, color }) => {

	return (
		<>
			<div
				style={{backgroundColor: color}}
				className={style.projectThumbnailDisplayWrapper}>
			</div>
			<div className={style.projectName}>{name}</div>
		</>
	)
}
