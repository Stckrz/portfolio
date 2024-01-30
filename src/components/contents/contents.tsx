import style from './contents.module.css';
import { SectionLink } from 'components/sectionLink/sectionLink';
import { MainPage } from 'components/mainpage/mainpagecontainer';

let categories = ['About', 'Skills', 'Projects', 'Resume']

export const Contents: React.FC = () => {
	return (
		<>
			<div className={style.contentsWrapper}>
				<MainPage />
				hi! Am Maddie :3
				<div className={style.linksWrapper}>
					{categories.map((category) => {return(<SectionLink category={category} />)})}
				</div>
			</div>
		</>
	)
}
