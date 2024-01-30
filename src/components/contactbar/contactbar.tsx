import React from 'react';
import style from './contactbar.module.css';
import { FaGithub } from 'react-icons/fa6';
import { MdOutlineEmail } from 'react-icons/md';
import { CiLinkedin } from 'react-icons/ci';


export const ContactBar: React.FC = () => {
	return (
		<>
			<div className={style.contactBarContainer}>
					<FaGithub />
					<MdOutlineEmail />
					<CiLinkedin />
			</div>
		</>
	)
}
