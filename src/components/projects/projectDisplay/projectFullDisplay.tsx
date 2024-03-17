import React from 'react';
import style from './projectFullDisplay.module.css';
import { ToolsView } from 'components/toolsview/toolsview';
import { IProjectInterface } from 'library/context';
import { FiExternalLink } from 'react-icons/fi';

interface ProjectFullDisplayProps {
	project: IProjectInterface,
}


export const ProjectFullDisplay: React.FC<ProjectFullDisplayProps> = ({ project }) => {

	return (
		<>
			<div className={style.projectFullDisplayWrapper} style={{ backgroundColor: project.colors.backgroundColor, color: project.colors.fontColor }} >
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
