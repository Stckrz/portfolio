import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from 'react-icons/io';
import { TbBrandDjango } from 'react-icons/tb';
import { TbBrandTypescript } from 'react-icons/tb';
import { FaPython } from 'react-icons/fa';
import { FaCss3Alt } from 'react-icons/fa';
import { FaHtml5 } from "react-icons/fa";
import { SiTailwindcss } from 'react-icons/si';

import { StackOverflowIcon } from 'components/skillsview/skilldropdown/animations/stackoverflow/stackoverflow';

export const skillsArray = [
	{
		icon: <FaHtml5 size={"5em"} />,
		title: 'HTML',
	},
	{
		icon: <FaCss3Alt size={"5em"} />,
		title: 'CSS',
	},
	{
		icon: <IoLogoJavascript size={"5em"} />,
		title: 'Javascript',
	},
	{
		icon: <FaReact size={"5em"} />,
		title: 'React',
	},
	{
		icon: <TbBrandTypescript size={"5em"} />,
		title: 'Typescript',
	},
	{
		icon: <FaPython size={"5em"} />,
		title: 'Python',
	},
	{
		icon: <TbBrandDjango size={"5em"} />,
		title: 'Django',
	},
	{
		icon: <StackOverflowIcon />,
		title: 'Stack Overflow',
	},
	{
		icon: <SiTailwindcss size={"5em"} />,
		title: 'Tailwind',
	},
]
