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
					"hats",
					"bitches",
					"tits",
					"ass",	
				]
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
