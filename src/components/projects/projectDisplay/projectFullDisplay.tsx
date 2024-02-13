import React from 'react';
import { useState, useContext } from 'react';
import { handleFadeOut } from 'library/animationfunctions';
import style from './projectFullDisplay.module.css';
import animationStyle from 'library/animationstyles.module.css';
import { ProjectThumbnailDisplay } from 'components/projects/projectDisplay/projectThumbnailDisplay';
import { projectsObject } from 'library/projectsObject';
import { ToolsView } from 'components/toolsview/toolsview';
import { IProjectInterface } from 'library/context';
import { FiExternalLink } from 'react-icons/fi';
import { BackButton } from 'components/backButton/backButton';
import { CurrentPage } from 'pages/home/home';

interface ProjectFullDisplayProps {
	project: IProjectInterface,
}

export const ProjectFullDisplay: React.FC<ProjectFullDisplayProps> = ({ project }) => {
	const { setPage } = useContext<any>(CurrentPage);
	const [activeIndex, setActiveIndex] = useState(0);

	//state for this components rendering. used for handling the fade-out of the component upon close
	const [isMounted, setIsMounted] = useState(true);

	return (
		<>
			<div className={isMounted ? animationStyle.componentFadeIn : animationStyle.componentFadeOut}>
			<div className={style.projectFullDisplayWrapper} style={{ backgroundColor: project.color }} >
				<div className={style.projectMainBox}>

					<div className={style.indexContainer}>
						<div className={style.backButtonBox} onClick={() => { handleFadeOut(isMounted, setIsMounted, setPage) }}>
							<BackButton />
						</div>

						<div className={style.containerContainer}>
							{projectsObject.map((project:IProjectInterface) => {
								return (
									<div className={style.projectDisplayContainerMin}
										onClick={() => { setActiveIndex(project.index) }}
									>
										<ProjectThumbnailDisplay project={project} />
									</div>
								)
							})}
						</div>


					</div>

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
			</div>
		</>
	)
}
