import React from 'react';
import style from './stackoverflow.module.css';
import { FaStackOverflow } from "react-icons/fa";

export const StackOverflowIcon: React.FC = () => {

	return (
		<>
			<div className={style.stackOverflowIconWrapper}>
				<div className={style.bottomBucket}>
					<div className={style.bucketCutout}></div>
					<div className={style.bucketCutoutTop}></div>
				</div>
				<div className={style.blockContainer}>
					<div className={`${style.block2} ${style.block}`}></div>
					<div className={`${style.block3} ${style.block}`}></div>
					<div className={`${style.block4} ${style.block}`}></div>
					<div className={`${style.block5} ${style.block}`}></div>
					<div className={`${style.block6} ${style.block}`}></div>
				</div>
			</div>
		</>
	)
}
