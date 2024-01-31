import React from 'react';
import { useState, useEffect } from 'react';

interface TypewriterProps{
	message: string,
	delay: number
}

export const Typewriter: React.FC<TypewriterProps> = ({message, delay}) => {
	const [currentIndex, setCurrentIndex] = useState(0);	
	const [typedMessage, setTypedMessage] = useState("");

	useEffect(()=>{
		setTimeout(()=>{
			if(currentIndex < message.length){
				setTypedMessage(typedMessage + message[currentIndex])
				setCurrentIndex(currentIndex + 1)
			}
		}, delay)
		
		},[currentIndex, typedMessage, message, delay])
	return(
		<>
			<div>
				{typedMessage}
			</div>
		</>
	)
}
