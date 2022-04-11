export interface IUser {
	email: string
	username?: string
	password: string
}

export interface ISignUpResponse {
	email: string
	username: string
	token: string
}

export interface IThunkState {
	isLoading: boolean
	error: any
	data: any
}
