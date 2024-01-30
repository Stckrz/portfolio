import React from 'react';
import style from './title.module.css';
import { ContactBar } from 'components/contactbar/contactbar';

export const Title: React.FC = () => {
	return (
		<>
			<div className={style.titleContainer}>
				<div className={style.nameBar}>
					Madison Sage
					<div className={style.phoneNumber}>
					(406)-475-4836
				</div>
			</div>
			<div className={style.contactInfo}>
				<ContactBar />
			</div>
		</div>
		</>
	)

}
