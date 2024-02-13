import { useState, useContext } from 'react';

//local imports
import style from './projectsContainer.module.css';
import { projectsObject } from 'library/projectsObject';
import { IProjectInterface } from 'library/context';

//component imports
import { ProjectThumbnailDisplay } from 'components/projects/projectDisplay/projectThumbnailDisplay';
import { ProjectFullDisplay } from 'components/projects/projectDisplay/projectFullDisplay';

export const Projects: React.FC = () => {

	const [activeIndex, setActiveIndex] = useState(0);

	return (
		<>
				<div className={style.projectsWrap}>
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

						{/* <div className={style.containerContainer}> */}
						{/* 	{projectsObject.map((project:IProjectInterface) => { */}
						{/* 		return ( */}
						{/* 			<div className={style.projectDisplayContainerMin} */}
						{/* 				onClick={() => { setActiveIndex(project.index) }} */}
						{/* 			> */}
						{/* 				<ProjectThumbnailDisplay project={project} /> */}
						{/* 			</div> */}
						{/* 		) */}
						{/* 	})} */}
						{/* </div> */}
					</div>
				</div>
		</>
	)
}
