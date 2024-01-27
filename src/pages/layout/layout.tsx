import { BackgroundParticles } from 'components/particles/particles';
import { Outlet } from 'react-router-dom'; 

export const Layout = () => {


	return (
		<>
			<div>
				<BackgroundParticles />
				<Outlet />
			</div>
		</>
	)

}
