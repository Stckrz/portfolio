import React from 'react';
import style from './projectThumbnailDisplay.module.css';
import { IProjectInterface } from 'library/context';

interface ProjectThumbnailDisplayProps {
	project: IProjectInterface,
}

export const ProjectThumbnailDisplay: React.FC<ProjectThumbnailDisplayProps> = ({ project }) => {

	return (
		<>
			<div
				style={{backgroundColor: project.color}}
				className={style.projectThumbnailDisplayWrapper}>
				{project.iconURL ?
				<img src={project.iconURL}/>:
					<div className={style.comingSoon}>Coming Soon</div>
				}
			</div>
			<div className={style.projectName}>{project.name}</div>
		</>
	)
}
