import { useState, useContext } from 'react';

//local imports
import style from './projectsContainer.module.css';
import { projectsObject } from 'library/projectsObject';
import { IProjectInterface } from 'library/context';
import animationStyle from 'library/animationstyles.module.css';


import { BackButton } from 'components/backButton/backButton';
import { handleFadeOut } from 'library/animationfunctions';
import { CurrentPage } from 'pages/home/home';

//component imports
import { ProjectThumbnailDisplay } from 'components/projects/projectDisplay/projectThumbnailDisplay';
import { ProjectFullDisplay } from 'components/projects/projectDisplay/projectFullDisplay';

export const Projects: React.FC = () => {
	const { setPage } = useContext<any>(CurrentPage);
	const [activeIndex, setActiveIndex] = useState(0);


	//state for this components rendering. used for handling the fade-out of the component upon close
	const [isMounted, setIsMounted] = useState(true);

	return (
		<>
			<div className={isMounted ? animationStyle.componentFadeIn : animationStyle.componentFadeOut}>
				<div className={style.projectsWrap}>
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
					<div className={style.projectsContainer} >

						{projectsObject.map((project:IProjectInterface) => {
							return (
								project.index === activeIndex &&
								<div
									className={style.projectDisplayContainerMax}
									onClick={() => { setActiveIndex(project.index) }}
								>
									<ProjectFullDisplay project={project} />
								</div>
							)
						})}

					</div>
				</div>
				</div>
		</>
	)
}
