import style from './sectionLink.module.css';
import { useContext } from 'react';
import { CurrentPage } from 'pages/home/home';

import { SpinIcon } from 'components/spinIcon/spinIcon';

interface SectionLinkProps {
	category: string,
}

export const SectionLink: React.FC<SectionLinkProps> = ({ category }) => {
	const {setPage} = useContext<any>(CurrentPage)

	return (
		<>
			<div className={style.linkContainer}>
				<div className={style.arrowBox}>
					<div className={style.showIcon}>
						<SpinIcon />
					</div>
				</div>
				<div onClick={()=>{setPage(category)}} className={style.categoryName}>
					{category}
				</div>
			</div>
		</>
	)
}
