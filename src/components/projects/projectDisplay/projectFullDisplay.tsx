import React from 'react';
import style from './projectFullDisplay.module.css';
import { ToolsView } from 'components/toolsview/toolsview';
import { IProjectInterface } from 'library/context';

interface ProjectFullDisplayProps {
	project: IProjectInterface,
}

export const ProjectFullDisplay: React.FC<ProjectFullDisplayProps> = ({ project }) => {
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
				<div className={style.bottomInfoPanel}>{project.projectTools && <ToolsView tools={project.projectTools} />}</div>
			</div>
		</>
	)
}
