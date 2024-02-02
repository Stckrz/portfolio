import React from 'react';
import { useState, useEffect } from 'react';

interface TypewriterProps {
	message: string,
	delay: number
}

export const Typewriter: React.FC<TypewriterProps> = ({ message, delay }) => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [typedMessage, setTypedMessage] = useState("");

	function intervalHandler() {
		let interval = setInterval(() => {
			setTypedMessage(typedMessage + message[currentIndex])

		}, delay)
		return () => {
			clearInterval(interval)
		}

	}

	useEffect(() => {

		let interval = setInterval(() => {
			if (currentIndex < message.length) {
				setTypedMessage(typedMessage + message[currentIndex])
				setCurrentIndex(currentIndex + 1)
				console.log('rerender')
			}else{
				return () => {
				setCurrentIndex(0)
				clearInterval(interval)
				 }}

		}, delay)
		return () => {
			clearInterval(interval)
		}
		setCurrentIndex(0)
		// }}
	}, [currentIndex, message, delay])

	return (
		<>
			<div>
				{typedMessage}
			</div>
		</>
	)
}
