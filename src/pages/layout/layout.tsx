import { BackgroundParticles } from 'components/particles/particles';
import { Navbar } from 'components/navbar/navbar';
import { Outlet } from 'react-router-dom'; 

export const Layout = () => {


	return (
		<>
			<div>
				<BackgroundParticles />
				{/* <Navbar /> */}
				<Outlet />
			</div>
		</>
	)

}
