import storefrontthumbnail from 'library/photos/storefrontthumbnail.png';
import storefrontfull from 'library/photos/storefrontfull.png';
import mplusspy from 'library/photos/mplusspy2.png';
import mpslogo from 'library/photos/mpslogo.png';
import todo from 'library/photos/todolist.png';
import todothumb from 'library/photos/todolist.png';

import { IProjectInterface } from 'library/context';


export const projectsObject: IProjectInterface[] =
	[
		{
			index: 0,
			name: "StoreFront",
			colors: {
				backgroundColor: '#fcefe8',
				fontColor: 'black',
			},
			iconURL: storefrontthumbnail,
			overviewURL: storefrontfull,
			projectDetails: [
				"Django back-end, JS/React/TS front-end.",
				"Fully responsive design.",
				"All images and item names generated with ai, including advertisements, programatically.",
				"Not completely 'feature complete', I could still ad some stuff like wishlist, social login, checkout, etc.. but just kind of seems exterraneous at this point.",
			],
			projectTools: ["Javascript", "React", "Typescript", "Django"],
			githubLink: 'https://github.com/Stckrz/storefront',
			siteLink: 'https://stckrz.com/storefront',
		},
		{
			index: 1,
			name: "Mythic Plus Spy",
			colors: {
				backgroundColor: '#CFFAFE',
				fontColor: 'black',
			},
			iconURL: mpslogo,
			overviewURL: mplusspy,
			projectDetails: [
				"Simple application which shows how many rewards a character in World of Warcraft has unlocked for their vault in the current week.",
				"Responsive design, css is all Tailwind.",
				"I wanted to keep the design as simple as possible, with a little flair here and there.. More could be done here but I think it's acceptable as is."
			],
			projectTools: ["Javascript", "React", "Typescript", "Tailwind"],
			githubLink: 'https://github.com/Stckrz/MythicPlusSpy',
			siteLink: 'https://stckrz.com/MythicPlusSpy',
		},
		{
			index: 2,
			name: "TODO",
			colors: {
				backgroundColor: '#18191A',
				fontColor: 'white'
			},
			iconURL: todothumb,
			overviewURL: todo,
			projectDetails: [
				"Everybody has to have a todo app.. So this is the one I'm putting on here.",
				"This uses React, Typescript, etc.. with context for darkmode. Should be fully responsive on whatever device.",
				"Really spent the most time here on animations, presentation, etc.."
			],
			projectTools: ["Javascript", "React", "Typescript"],
			githubLink: 'https://github.com/Stckrz/todo',
			siteLink: 'https://stckrz.com/todo',
		},
		{
			index: 3,
			name: "Coming Soon",
			colors: {
				backgroundColor: 'grey',
				fontColor: "white"
			},
		},

	]
