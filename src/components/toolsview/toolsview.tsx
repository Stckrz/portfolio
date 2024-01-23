import style from './toolsview.module.css';
import { skillsArray } from 'library/skillsetObject';

interface ToolsViewProps{
	tools: string[]
}

export const ToolsView: React.FC<ToolsViewProps> = ({tools}) => {
		

	function findMatches(toolsarray:string[]){
		let newarray:any = []
		// toolsarray.map((item)=>{
		// 	newarray.push(skillsArray.filter(butts => butts.title === item))
		// })
		for(let i = 0; i < toolsarray.length; i++){
			let a = skillsArray.filter(item => item.title === tools[i])
			newarray.push(a[0].icon)
		}
		return newarray
	}
	let toolIconsArray = findMatches(tools)
	console.log(toolIconsArray)

	return (
		<>
			<div className={style.toolsWrapper}>
				{toolIconsArray.map((icon:any)=>{
				return(
					<div>{icon}</div>
				)
				})}
			</div>
		</>
	)


}
