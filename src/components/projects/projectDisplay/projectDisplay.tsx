import React from 'react';
import { useState } from 'react';
import style from './projectDisplay.module.css';

interface ProjectDisplayProps {
	color: string;
}

export const ProjectDisplay: React.FC<ProjectDisplayProps> = ({ color }) => {
	const [isMaximized, setIsMaximized] = useState(false);

	function maximizedHandler() {
		setIsMaximized(!isMaximized)
	}

	return (
		<>
			<div
				onClick={maximizedHandler}
				style={{backgroundColor: color}}
				className={isMaximized ? style.projectDisplayWrapperMax : style.projectDisplayWrapperMin}>
			</div>
		</>
	)
}
