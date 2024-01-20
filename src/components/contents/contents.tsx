import style from './contents.module.css';
import { SectionLink } from 'components/sectionLink/sectionLink';

let categories = ['About', 'Skills', 'Projects', 'Experience', 'Resume']

export const Contents: React.FC = () => {
	return (
		<>
			<div className={style.contentsWrapper}>
				hi! Am Maddie :3
				<div className={style.linksWrapper}>
					{categories.map((category) => {return(<SectionLink category={category} />)})}
				</div>
			</div>
		</>
	)
}
