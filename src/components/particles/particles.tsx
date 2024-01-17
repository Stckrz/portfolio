import { useEffect, useMemo, useState } from 'react';
import style from './particles.module.css';
import Particles, { initParticlesEngine } from '@tsparticles/react';

import {
	type Container,
	type ISourceOptions,
} from '@tsparticles/engine';
import { loadSlim } from "@tsparticles/slim";


export const BackgroundParticles: React.FC = () => {
	const [init, setInit] = useState(false);

	useEffect(() => {
		initParticlesEngine(async (engine) => {
			await loadSlim(engine)
		}).then(() => {
			setInit(true);
		});
	}, []);

	const particlesLoaded = async (container?: Container): Promise<void> => {
		console.log(container)
	}

	const options: ISourceOptions = useMemo(
		() => ({
			background: {
				color: {
					value: "black",
				},
				zIndex: -1
			},
			fpsLimit: 120,
			interactivity: {
				events: {
					onClick: {
					},
					onHover: {
						enable: true,
						parallax: {
							enable: true,
							force: 300,
							smooth: 5
						}
					},
				},
				modes: {
					push: {
						quantity: 4,
					},
					repulse: {
						distance: 200,
						duration: 0.4,
					},
				},
			},
			particles: {
				color: {
					value: [
						"#ffffff",
						"#50E3C3",
						"#BD10E0",
					]
				},
				move: {
					enable: true,
					random: false,
					speed: 1,
					straight: true,
				},
				number: {
					density: {
						enable: true,
					},
					value: 30,
				},
				opacity: {
					value: 0.5,
				},
				shape: {
					type: "circle",
				},
				size: {
					value: { min: 1, max: 5 },
				},
			},
			detectRetina: true,
		}),
		[],
	);

	if (init) {
		return (
			<div className={style.particlesContainer}>
			<Particles
				id="tsparticles"
				particlesLoaded={particlesLoaded}
				options={options}
			/>
			</div>
		);


	}

	return <></>;



}
