export const pageInitial = {
	page: "",
	setPage: () => {}
}

export interface IPageInterface{
	page: string,
	setPage: (page: string) => void
}

export interface IProjectInterface{
	index: number,
	name: string,
	color: string,
	iconURL?: string,
	overviewURL?: string,
	projectDetails?: string[],
	projectTools?: string[]
}
