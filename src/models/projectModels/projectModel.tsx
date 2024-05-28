import storefrontthumbnail from 'src/assets/photos/storefrontthumbnail.png';
// import mpslogo from 'src/assets/photos/mpslogo.png';
import todoLogo from 'src/assets/photos/todoLogo.png';
import calleditlogo from 'src/assets/photos/calledit/Calledit!.svg';
import mpslogo from 'src/assets/photos/mps.svg';

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
		name: "Calledit!",
		description: "Users make a prediction, and other users vote whether or not they think it will come true!",
		logo: calleditlogo,
		skills: [
			"Javascript", "React", "Typescript", "Tailwind", "Mongodb", "Express"
		],
		link: "https://stckrz.com/calleditprod"
	},
	{
		name: "Mythic Plus Spy",
		description:"Simple application which shows how many rewards a character in World of Warcraft has unlocked for their vault in the current week.",
		logo: mpslogo,
		skills: [
			"Javascript", "React", "Typescript", "Tailwind",
		],
		link: "https://stckrz.com/MythicPlusSpy"
	},
	{
		name: "To Do App",
		description: "Everybody has to have a todo app.. So this is the one I'm putting on here.",
		logo: todoLogo,
		skills: [
			"Javascript", "React", "Typescript",
		],
		link: "https://stckrz.com/todo"
	}
]
