import React from 'react';
import { useState, useEffect } from 'react';

interface TypewriterProps {
	message: string,
	delay: number
}

export const Typewriter: React.FC<TypewriterProps> = ({ message, delay }) => {
	const [typedMessage, setTypedMessage] = useState("");

	const interval = React.useRef<any>(null);

	function typeStuff() {

		clearInterval(interval.current)
		setTypedMessage("a")

		let builtString = ""
		let i = 0;

		interval.current = setInterval(() => {
			builtString += message[i]
			i++
			setTypedMessage(builtString)

			if (builtString === message) {
				clearInterval(interval.current)
			}
		}, delay);

		return () => {
			clearInterval(interval.current)
		}

	}

	useEffect(() => {
		message !== undefined &&
			typeStuff()

	}, [message, delay])


	return (
		<>
			<div>
				{typedMessage}
			</div>
		</>
	)
}
