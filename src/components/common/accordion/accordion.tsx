import React, { useEffect } from 'react';

interface AccordionProps {
	children: IAccordion[]
}

interface IAccordion {
	title: string,
	body: string,
	image?: string,
	icon?: React.FC,
	expanded?: boolean
}

export const Accordion: React.FC<AccordionProps> = ({ children }) => {
	let accordionArray: IAccordion[] = []

	function createAccordionArray(array: IAccordion[]) {
		array.map((item) => {
			accordionArray.push({ ...item, expanded: false })
			console.log(accordionArray)
		})
	}

	// const open = (childname) => {
	// }


	useEffect(() => {
		createAccordionArray(children)
	}, [])


	return (
		<>
			<div>
				ass
				<div>
				{
					accordionArray.map((item: IAccordion) => {
						return (
							<div>
								{item.title}
							</div>
						)
					})
				}
				</div>

			</div>
		</>
	)
}
