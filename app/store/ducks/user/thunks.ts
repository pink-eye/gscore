import { createAsyncThunk } from '@reduxjs/toolkit'
import GScoreApi from '../../../api'
import { IUser } from './types'

export const signUp = createAsyncThunk('users/signUp', async (user: IUser, thunkAPI) => {
	try {
		const response = await GScoreApi().signUp(user)
		return response.data
	} catch (error) {
		return error
	}
})

export const signIn = createAsyncThunk('users/signIn', async (user: IUser, thunkAPI) => {
	try {
		const response = await GScoreApi().signIn(user)
		return response.data
	} catch (error) {
		return error
	}
})
