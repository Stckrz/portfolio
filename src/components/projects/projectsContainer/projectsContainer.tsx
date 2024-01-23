import { useState, useContext } from 'react';

//local imports
import style from './projectsContainer.module.css';
import { projectsObject } from 'library/projectsObject';
import animationStyle from 'library/animationstyles.module.css';
import { handleFadeOut } from 'library/animationfunctions';

//context import
import { CurrentPage } from 'pages/home/home';

//component imports
import { ProjectThumbnailDisplay } from 'components/projects/projectDisplay/projectThumbnailDisplay';
import { BackButton } from 'components/backButton/backButton';

export const Projects: React.FC = () => {
	const { setPage } = useContext<any>(CurrentPage);

	//state for this components rendering. used for handling the fade-out of the component upon close
	const [isMounted, setIsMounted] = useState(true);

	const [activeIndex, setActiveIndex] = useState(0);

	return (
		<>
			<div className={isMounted ? animationStyle.componentFadeIn : animationStyle.componentFadeOut}>
				<div className={style.projectsWrap}>
					<div className={style.backButtonBox} onClick={() => { handleFadeOut(isMounted, setIsMounted, setPage) }}>
						<BackButton />
					</div>
					<div className={style.projectsContainer} >

						{projectsObject.map((project) => {
							return (
								project.index === activeIndex &&
								<div
									className={style.projectDisplayContainerMax}
									onClick={() => { setActiveIndex(project.index) }}
								>
									<ProjectThumbnailDisplay name={project.name} color={project.color} />
								</div>
							)
						})}

						<div className={style.containerContainer}>
							{projectsObject.map((project) => {
								return (
									<div className={style.projectDisplayContainerMin}
										onClick={() => { setActiveIndex(project.index) }}
									>
										<ProjectThumbnailDisplay name={project.name} color={project.color} />
									</div>
								)
							})}
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
