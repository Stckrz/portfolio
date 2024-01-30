import storefrontthumbnail from 'library/photos/storefrontthumbnail.png';
import storefrontfull from 'library/photos/storefrontfull.png';
import mplusspy from 'library/photos/mplusspy2.png';
import mpslogo from 'library/photos/mpslogo.png';

import { IProjectInterface } from 'library/context';


export const projectsObject:IProjectInterface[] =  
		[
			{
				index: 0,
				name: "StoreFront",
				color: '#fcefe8',
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
				color: '#CFFAFE',
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
				name: "Coming Soon",
				color: 'grey',
				iconURL: "",
				overviewURL: "",
			},
			// {
			// 	index: 2,
			// 	name: "Asses",
			// 	color: 'green',
			// 	iconURL: "",
			// 	overviewURL: "",
			// },
			// {
			// 	index: 3,
			// 	name: "Ur Mom",
			// 	color: 'white',
			// 	iconURL: "",
			// 	overviewURL: "",
			// }
			
		]
