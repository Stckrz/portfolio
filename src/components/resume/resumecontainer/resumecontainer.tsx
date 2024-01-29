import React from 'react';
import { useState, useContext } from 'react';
import { CurrentPage } from 'pages/home/home';
import animationStyle from 'library/animationstyles.module.css';
import { handleFadeOut } from 'library/animationfunctions';

import style from './resumecontainer.module.css';

import { Title } from 'components/resume/title/title';
import { ResumeSkills } from 'components/resume/skills/resumeskills';
import { ResumeSchool } from 'components/resume/school/resumeschool';
import { ResumeJobs } from 'components/resume/jobs/resumejobs';
import { ResumeReferences } from 'components/resume/references/resumereferences';
import { ResumeAbout } from 'components/resume/about/resumeabout';
import { BackButton } from 'components/backButton/backButton';


export const Resume: React.FC = () => {
	const { setPage } = useContext<any>(CurrentPage)
	const [isMounted, setIsMounted] = useState(true)


	return (
		<>
			<div className={style.resumeContainer}>
				<div className={style.resumeContent}>
					<div className={style.topPane}>
						<Title />
					</div>
					<div className={style.middleSection}>
						<div className={style.leftPane}>
							<ResumeAbout />
						</div>
						<div className={style.rightPane}>
							<ResumeSkills />
							<ResumeSchool />
							<ResumeJobs />
						</div>
					</div>
					<div className={style.bottomPane}>
						<div onClick={() => { handleFadeOut(isMounted, setIsMounted, setPage) }}>
						<BackButton />
						</div>
						<ResumeReferences />
					</div>
				</div>
			</div>
		</>
	)


}
