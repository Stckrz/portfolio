import style from './toolsview.module.css';
import { skillsArray } from 'library/skillsetObject';

interface ToolsViewProps{
	tools: string[]
}

export const ToolsView: React.FC<ToolsViewProps> = ({tools}) => {
		
	function findMatches(toolsarray:string[]){
		let newarray:any = []
		for(let i = 0; i < toolsarray.length; i++){
			let a = skillsArray.filter(item => item.title === tools[i])
			newarray.push(a[0].icon)
		}
		return newarray
	}
	let toolIconsArray = findMatches(tools)

	return (
		<>
			<div className={style.toolsWrapper}>
				{toolIconsArray.map((icon:any)=>{
				return(
					<div style={{display: 'flex'}}>
						{icon}
					</div>
				)
				})}
			</div>
		</>
	)
}
