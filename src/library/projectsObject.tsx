import storefrontthumbnail from 'library/photos/storefrontthumbnail.png';
import storefrontfull from 'library/photos/storefrontfull.png';

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
			},
			{
				index: 1,
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
