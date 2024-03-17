import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from 'react-icons/io';
import { TbBrandDjango } from 'react-icons/tb';
import { TbBrandTypescript } from 'react-icons/tb';
import { FaPython } from 'react-icons/fa';
import { FaCss3Alt } from 'react-icons/fa';
import { FaHtml5 } from "react-icons/fa";
import { SiTailwindcss } from 'react-icons/si';
import { FaStackOverflow } from 'react-icons/fa';
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { SiRedux } from "react-icons/si";

import { StackOverflowIcon } from 'components/skillsview/skilldropdown/animations/stackoverflow/stackoverflow';
const size = "3em"

export const skillsArray = [
	{
		icon: <FaHtml5 size={size} />,
		title: 'HTML',
		description: "HTML is something I have continued to learn throughout all of my time learning and developing, and something I imagine I'll continue to learn as time goes on."
	},
	{
		icon: <FaCss3Alt size={size} />,
		title: 'CSS',
		description: "CSS is another skill that I continue to learn more and more about as I grow and learn. It's a skill that is naturally improving, because I use it in almost everything I write. Still, its wild how much there is to learn. I like to spend time on codepen sometimes looking at projects, and also sometimes spend time doing CSS battles for fun."
	},
	{
		icon: <IoLogoJavascript size={size} />,
		title: 'Javascript',
		description: "Javascript contains the core of my experience with code in general, and it's where I spend the majority of my time. I spent quite a lot of time with javascript, before getting into React or other frameworks."
	},
	{
		icon: <FaReact size={size} />,
		title: 'React',
		description: "I have spent more time in the last year in React than anything. I have been pretty much exclusively developing in React for a while now, and absorbing and learning as much as I can. I've done a lot of work with react router, typescript, etc.. I have good experience with function based components, and a good understanding of all of the built-in hooks. I have made a number of web apps in React, some of which are in the projects section of this portfolio."
	},
	{
		icon: <SiRedux size={size} />,
		title: 'Redux',
		description: "I have used redux on several projects for simple global state management. I have only used stores and slices, I have not had experience with the 'old way' of using redux, which I have heard was cumbersome and terrible."
	},
	{
		icon: <TbBrandTypescript size={size} />,
		title: 'Typescript',
		description: "Basically, I always knew I would need typescript from day 1 of my journey with React. I made a number of projects to make sure that I was familiar with React before jumping into typescript, and have made sure to include it in everything I have made sense. They are basically the same thing to me."
	},
	{
		icon: <SiExpress size={size} />,
		title: 'Express',
		description: "I have been using mostly express as my choice for server code, especially for REST API's in MERN stack applications."
	},
	{
		icon: <SiMongodb size={size} />,
		title: 'MongoDb',
		description: "I have been using MongoDb instead of sqlite ever since I started learning the MERN stack, and have created a few different projects with it, both using the cloud service and private docker containers. Familliar with most aggregations and CRUD methods."
	},
	{
		icon: <FaPython size={size} />,
		title: 'Python',
		description: "Python was the first language I learned in school, and I spent 2-3 years with it before I left college. Still, I feel that I have a much stronger understanding of Javascript, but my Python skills are servicable. The main thing I use it for now is for creating backends with django/dj-rest-framework."
	},
	{
		icon: <TbBrandDjango size={size} />,
		title: 'Django',
		description: "Django was my first experience with any sort of web app framework, and it was introduced as a backend solution. It was confusing at first, but I've spent enough time with it that it's become my go-to solution for making API's and backends in order to test my front-end code."
	},
	// {
	// 	icon: <FaStackOverflow size={size} />,
	// 	title: 'Stack Overflow',
	// 	description: "This is probably the technology I have the most experience with. Who knows how many countless hours I have spent on this website.."
	// },
	{
		icon: <SiTailwindcss size={size} />,
		title: 'Tailwind',
		description: "Tailwind is a newer technology to me, but it's very easy to pick up. I've made a handfull of projects with Tailwind, enough to warrant putting in on this list."
	},
]
