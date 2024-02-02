import React from 'react';
import { useState, useEffect } from 'react';
import style from './contents.module.css';
import { contentsArray } from 'library/contentsObjectArray';
import { SectionLink } from 'components/sectionLink/sectionLink';
import { Typewriter } from 'components/typewriter/typewriter';
import { BackButton } from 'components/backButton/backButton';

let categories = ['About', 'Skills', 'Projects', 'Resume']

export const Contents: React.FC = () => {

	let [contentArrayIndex, setContentArrayIndex] = useState(0);
	let [typewriterText, setTypewriterText] = useState("sbuttseub");

	function contentArrayIndexHandler() {
		if (contentArrayIndex < contentsArray.length) {
			setTypewriterText(contentsArray[contentArrayIndex])
		}
	}

	// useEffect(() => {
	// 	contentArrayIndexHandler()
	// }, [typewriterText])

	return (
		<>
			<div className={style.contentsWrapper}>
				<div className={style.contentTypewriter}>
					{/* <Typewriter message={typewriterText} delay={250} /> */}
					<Typewriter message={typewriterText} delay={250} />
					<div onClick={() => {contentArrayIndexHandler()}} className={style.nextPageButton}>
						<BackButton />
					</div>
				</div>

				<div className={style.linksWrapper}>
					{categories.map((category) => { return (<SectionLink category={category} />) })}
				</div>
			</div>
		</>
	)
}
