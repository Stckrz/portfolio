import React from 'react';
import style from './mainpagecontainer.module.css';
import { useRef, useEffect, useState } from 'react';
import { Typewriter } from 'components/typewriter/typewriter';

export const MainPage: React.FC = () => {
	// const [isInView, setIsInView] = useState(false)
	//
	// const mainref = useRef<HTMLDivElement | null>(null);
	//
	// const checkInView = () => {
	// 	if(!mainref)
	// 	return;
	// 	console.log(mainref.getBoundingClientRect().height)
	//
	// 	// const rect = mainref.current.getBoundingClientRect();
	// 	// setIsInView(
	// 	// 	rect.top < window.innerHeight && rect.bottom >= 0
	// 	// );
	// };
	return (

		<>
			<div ref={mainref => {if (!mainref) return; console.log(mainref.getBoundingClientRect().height)}} className={style.mainPageWrapper}>
				{/* <Typewriter message={'hi! i pooped!'} delay={250} /> */}
			</div>
		</>
	)
}
