import { SerializedError } from '@reduxjs/toolkit/dist/createAsyncThunk'

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

export interface IUserState {
	isLoading: boolean
	error: SerializedError | null
	data: any
}
