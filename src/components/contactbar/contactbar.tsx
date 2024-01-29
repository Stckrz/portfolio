import React from 'react';
import { FaGithub } from 'react-icons/fa6';
import { MdOutlineEmail } from 'react-icons/md';
import { CiLinkedin } from 'react-icons/ci';


export const ContactBar: React.FC = () => {
	return (
		<>
			<div>
				<FaGithub />
				<MdOutlineEmail />
				<CiLinkedin />
			</div>
		</>
	)
}
