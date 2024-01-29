import React from 'react';
import style from './title.module.css';
import { ContactBar } from 'components/contactbar/contactbar';

export const Title: React.FC = () => {
	return (
		<>
			<div className={style.titleContainer}>
				<div className={style.nameBar}>
					Madison Sage
				</div>
				<div className={style.contactInfo}>
					<ContactBar />
				</div>
			</div>
		</>
	)

}
