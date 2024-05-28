import { IoLogoLinkedin, IoLogoGithub, } from "react-icons/io"
import { IoMail } from "react-icons/io5"

export const iconDictionary: ISocialLink[] = [
	{
		id: 0,
		name: "email",
		logo: < IoMail size="2em" />,
		link: "mailto:rin449@gmail.com",
		iconColor: "#74c7ec",
		position: { top: "5%", right: "80%" }
	},
	{
		id: 1,
		name: "linkedin",
		logo: < IoLogoLinkedin size="2em" />,
		link: "https://www.linkedin.com/in/madison-sage-5a45692b7",
		iconColor: "#f38ba8",
		position: { top: "5%", right: "80%" }
	},
	{
		id: 2,
		name: "github",
		logo: <IoLogoGithub size="2em" />,
		link: "https://github.com/stckrz",
		iconColor: "#a6e3a1",
		position: { top: "5%", right: "80%" }
	},
]

export interface ISocialLink {
	id: number,
	name: string,
	logo: any,
	link: string,
	iconColor: string,
	position: any,
}
export const iSocialLinkDefault = {
	id: 0,
	name: "",
	logo: IoLogoGithub,
	link: "",
	iconColor: "",
	position: "",
}
