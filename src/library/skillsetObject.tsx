import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from 'react-icons/io';
import { TbBrandDjango } from 'react-icons/tb';
import { TbBrandTypescript } from 'react-icons/tb';
import { FaPython } from 'react-icons/fa';
import { FaCss3Alt } from 'react-icons/fa';
import { FaHtml5 } from "react-icons/fa";
import { SiTailwindcss } from 'react-icons/si';

import { StackOverflowIcon } from 'components/skillsview/skilldropdown/animations/stackoverflow/stackoverflow';
const size = "3em"

export const skillsArray = [
	{
		icon: <FaHtml5 size={size} />,
		title: 'HTML',
		description: "hello"
	},
	{
		icon: <FaCss3Alt size={size} />,
		title: 'CSS',
		description: "hello"
	},
	{
		icon: <IoLogoJavascript size={size} />,
		title: 'Javascript',
		description: "hello"
	},
	{
		icon: <FaReact size={size} />,
		title: 'React',
		description: "hello"
	},
	{
		icon: <TbBrandTypescript size={size} />,
		title: 'Typescript',
		description: "hello"
	},
	{
		icon: <FaPython size={size} />,
		title: 'Python',
		description: "hello"
	},
	{
		icon: <TbBrandDjango size={size} />,
		title: 'Django',
		description: "hello"
	},
	{
		icon: <StackOverflowIcon />,
		title: 'Stack Overflow',
		description: "hello"
	},
	{
		icon: <SiTailwindcss size={size} />,
		title: 'Tailwind',
		description: "hello"
	},
]
