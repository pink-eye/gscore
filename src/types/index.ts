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

export interface ILoginData {
	email: string
	password: string
}

export interface IRegistryData extends ILoginData {
	username: string
}

export interface IPersonalData {
	username: string
	email: string
}

export interface IPasswordsData {
	currentPassword: string
	newPassword: string
}

export interface ICode {
	id: number
	code: string
	origin: string
	status: string
	subscribeId: number
	subscribe: string
	userId: number
	user: string
}

export interface ISubscription {
	id: number
	userId: number
	productId: number
	product: IProduct
	currentPeriodStart: string
	currentPeriodEnd: string
	status: string
	codes: ICode[]
}
