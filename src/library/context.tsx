export const pageInitial = {
	page: "",
	setPage: () => {}
}

export interface IPageInterface{
	page: string,
	setPage: (page: string) => void
}
export interface IColorInterface{
	backgroundColor: string,
	fontColor: string
}

export interface IProjectInterface{
	index: number,
	name: string,
	colors: IColorInterface,
	iconURL?: string,
	overviewURL?: string,
	projectDetails?: string[],
	projectTools?: string[]
	githubLink?: string,
	siteLink?: string
}
