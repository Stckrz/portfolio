import calleditlogo from 'src/assets/photos/calledit/Calledit!.svg';
import resoniteshrinelogo from 'src/assets/resoniteshrine.png';
import mpslogo from 'src/assets/photos/mps.svg';
import inventoryPhoto from 'src/assets/photos/inventory.png';
import timeKeepLogo from 'src/assets/photos/timeKeep.png';
import libraryLogo from 'src/assets/photos/library.png';
import chesslogo from 'src/assets/photos/chessLogo.png';

export interface ProjectModel {
	name: string,
	description: string,
	logo: string,
	skills: string[],
	link: string
}

export const projectModelDefault = {
	name: "",
	description: "",
	logo: "",
	skills: [],
	link: ""
}

export const projectArray = [
	{
		name: "TimeKeep",
		description: "This is an app I made to help keep track of small stints of time, and create an adjusted timeframe based on the length of the times.",
		logo: timeKeepLogo,
		skills: [
			"Javascript", "React", "Typescript"
		],
		link: "https://stckrz.com/timeKeep"
	},
	{
		name: "MaddieLibrary",
		description: "This is a library-type application I made to keep track of my physical media, and who I have loaned it out to.",
		logo: libraryLogo,
		skills: [
			"Javascript", "Vue", "Typescript", "PHP", "Laravel"
		],
		link: "https://github.com/stckrz/maddielibrary"
	},
	{
		name: "Chess Stats",
		description: "A front-end consumption of the Chess.com API build using Shadcn Ui",
		logo: chesslogo,
		skills: [
			"Javascript", "React", "Tailwind", "Typescript",
		],
		link: "https://stckrz.com/chessStats"
	},
	{
		name: "Resonite Shrine",
		description: "A blog style website where I can post articles and tutorials for the VR game Resonite I don't play anymore, and I dont have my S3 bucket anymore, so it is no longer deployed.",
		logo: resoniteshrinelogo,
		skills: [
			"Javascript", "React", "Tailwind", "Typescript", "Django"
		],
		link: "https://github.com/stckrz/resoniteshrine"
	},
	// {
	// 	name: "Inventory System",
	// 	description: "A basic inventory management system with functionality for fulfilling orders, restocking, and adding and editing shop items",
	// 	logo: inventoryPhoto,
	// 	skills: [
	// 		"Javascript", "Vue", "Typescript", "PHP", "MySql"
	// 	],
	// 	link: "https://stckrz.com/vueFrontend"
	// },
	// {
	// 	name: "Calledit!",
	// 	description: "Users make a prediction, and other users vote whether or not they think it will come true!",
	// 	logo: calleditlogo,
	// 	skills: [
	// 		"Javascript", "React", "Typescript", "Tailwind", "Mongodb", "Express"
	// 	],
	// 	link: "https://stckrz.com/calleditprod"
	// },
	// {
	// 	name: "Mythic Plus Spy",
	// 	description:"Simple application which shows how many rewards a character in World of Warcraft has unlocked for their vault in the current week.",
	// 	logo: mpslogo,
	// 	skills: [
	// 		"Javascript", "React", "Typescript", "Tailwind",
	// 	],
	// 	link: "https://stckrz.com/MythicPlusSpy"
	// },
]
