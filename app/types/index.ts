export interface IProduct {
	id: number
	sitesCount: number
	name: string
	prices: [
		{
			id: number
			isActive: boolean
			productId: number
			price: string
		}
	]
}

export interface IFormValuesLogin {
	email: string
	password: string
}

export interface IFormValuesRegistry extends IFormValuesLogin {
	username: string
}
