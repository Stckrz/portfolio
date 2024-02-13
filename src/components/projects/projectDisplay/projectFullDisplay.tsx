import React from 'react';
import { useState, useContext } from 'react';
import style from './projectFullDisplay.module.css';
import { ProjectThumbnailDisplay } from 'components/projects/projectDisplay/projectThumbnailDisplay';
import { projectsObject } from 'library/projectsObject';
import { ToolsView } from 'components/toolsview/toolsview';
import { IProjectInterface } from 'library/context';
import { FiExternalLink } from 'react-icons/fi';

interface ProjectFullDisplayProps {
	project: IProjectInterface,
}

export const ProjectFullDisplay: React.FC<ProjectFullDisplayProps> = ({ project }) => {
	const [activeIndex, setActiveIndex] = useState(0);


	return (
		<>
			<div className={style.projectFullDisplayWrapper} style={{ backgroundColor: project.color }} >
				<div className={style.projectMainBox}>

					<div className={style.projectScreenshot}>
						{project.overviewURL !== "" &&
							<img src={project.overviewURL} />
						}
					</div>
					<div className={style.sideInfoPanel}>
						<ul className={style.projectDetailsList}>
							{
								project.projectDetails &&
								project.projectDetails.map((detail) => {
									return (
										<li>{detail}</li>
									)
								})
							}
						</ul>
					</div>
				</div>
				<div className={style.bottomInfoPanel}>
					<div className={style.toolsContainer}>
						{project.projectTools && <ToolsView tools={project.projectTools} />}
					</div>
					<div className={style.projectLinks}>
						<a href={project.githubLink} target="_blank">
							<FiExternalLink />{`Github`}
						</a>
						<a href={project.siteLink} target="_blank">

							<FiExternalLink />{'View site'}
						</a>
					</div>
				</div>
			</div>
		</>
	)
}
