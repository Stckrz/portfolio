import React from 'react';
import style from './backButton.module.css';
import { MdOutlinePlayArrow } from 'react-icons/md';


export const BackButton: React.FC = () => {

	return (
		<>
			<div className={style.backButton}>
				<MdOutlinePlayArrow size={'3em'} />
			</div>
		</>
	)
}
