import style from './projectsContainer.module.css';

import animationStyle from 'library/animationstyles.module.css';
import { handleFadeOut } from 'library/animationfunctions';

import { useState, useContext } from 'react';
import { CurrentPage } from 'pages/home/home';

import { ProjectDisplay } from 'components/projects/projectDisplay/projectDisplay';
import { BackButton } from 'components/backButton/backButton';


export const Projects: React.FC = () => {
	const { setPage } = useContext<any>(CurrentPage);
	const [isMounted, setIsMounted] = useState(true);
	const [projectObjectArray, setProjectObjectArray] = useState(
		[
			{
				color: 'red',
				isBig: true,
			},
			{
				color: 'blue',
				isBig: false,
			},
			{
				color: 'green',
				isBig: false,
			},
			{
				color: 'white',
				isBig: false,
			}
		]
	)

	function isBigHandler(color: string) {
		let tempArray = [...projectObjectArray]
		tempArray.map((item) => {
			item.color === color ?
				item.isBig = true :
				item.isBig = false
		})
		setProjectObjectArray(tempArray)
	}

	return (
		<>
			<div className={isMounted ? animationStyle.componentFadeIn : animationStyle.componentFadeOut}>
				<div className={style.projectsWrap}>
					<div className={style.backButtonBox} onClick={()=>{handleFadeOut(isMounted, setIsMounted, setPage)}}>
						<BackButton />
					</div>
					<div className={style.projectsContainer} >
						{projectObjectArray.map((item) => {
							return (
								<div className={
									item.isBig ? style.projectDisplayContainerMax : style.projectDisplayContainerMin}
									onClick={() => { isBigHandler(item.color) }}
								>
									<ProjectDisplay color={item.color} />
								</div>
							)
						})
						}
					</div>
				</div>
			</div>
		</>
	)
}
