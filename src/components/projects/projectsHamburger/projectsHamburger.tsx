import React, { useState, SetStateAction } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import style from './projectsHamburger.module.css';
import { projectsObject } from 'library/projectsObject';
import { ProjectThumbnailDisplay } from 'components/projects/projectDisplay/projectThumbnailDisplay';

interface ProjectsHamburgerProps {
	setActiveIndex: React.Dispatch<SetStateAction<number>>
}
export const ProjectsHamburger: React.FC<ProjectsHamburgerProps> = ({ setActiveIndex }) => {
	const [isExpanded, setIsExpanded] = useState(false);

	return (
		<>
			{isExpanded
				? <div>
					<div onClick={() => { setIsExpanded(!isExpanded) }}>
						<GiHamburgerMenu size={"2.5em"} />
					</div>
					<div className={style.hamburgerMenu}>
						{projectsObject.map((project) => {
							return (
								<div 
									className={style.thumbnailWrapper}
									onClick={() => { { setActiveIndex(project.index) }; { setIsExpanded(!isExpanded) } }}>
									<ProjectThumbnailDisplay project={project} />
								</div>
							)
						})}
					</div>
				</div>
				: <div onClick={() => { setIsExpanded(!isExpanded) }}><GiHamburgerMenu size={"2.5em"} /></div>
			}
		</>
	)
}
