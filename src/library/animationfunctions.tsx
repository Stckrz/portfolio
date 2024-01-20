
//This function requires the isMounted and setIsMounted useState parameters, as well as the setState context parameter for setPage..
export function handleFadeOut(
	isMounted: boolean, 
	setIsMounted: React.Dispatch<React.SetStateAction<boolean>>, 
	setPage: React.Dispatch<React.SetStateAction<string>>
	) 	{
		setIsMounted(!isMounted)
		setTimeout(() => {
			setPage('Contents')
		}, 250);
	}
	
