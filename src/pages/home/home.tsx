import style from './home.module.css';

import { createContext, useState } from 'react';
import {
	IPageInterface,
	pageInitial,
} from 'library/context';

import { Skills } from 'components/skillsview/skillsview';
import { Contents } from 'components/contents/contents';
import { Projects } from 'components/projects/projectsContainer/projectsContainer';
import { Resume } from 'components/resume/resumecontainer/resumecontainer';

export const CurrentPage = createContext<IPageInterface>(pageInitial)

export const Home = () => {
	const [page, setPage] = useState<string>('Contents')
	return (
		<>
			<CurrentPage.Provider value={{ page, setPage }}>
				<div className={style.homeContainer}>
					<div className={style.contentDisplay}>
						{page === "Contents" &&
							<Contents />
						}
						{page === "Skills" &&
								<Skills />
						}
						{page === "Projects" &&
							<Projects />
						}
						{page === "Resume" &&
							<Resume />
						}
					</div>
				</div>
			</CurrentPage.Provider>
		</>
	)
}
