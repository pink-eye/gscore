import { createAsyncThunk } from '@reduxjs/toolkit'
import { RootState } from '../..'
import GScoreApi from '../../../api'
import { IPasswordsData, IPersonalData } from '../../../types'
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

export const updatePersonal = createAsyncThunk('users/updatePersonal', async (data: IPersonalData, { getState }) => {
	const state = getState() as RootState

	try {
		const response = await GScoreApi({ token: state.token }).updatePersonal(data)
		return response.data
	} catch (error) {
		return error
	}
})

export const updatePassword = createAsyncThunk('users/updatePassword', async (data: IPasswordsData, { getState }) => {
	const state = getState() as RootState

	try {
		const response = await GScoreApi({ token: state.token }).updatePassword(data)
		return response.data
	} catch (error) {
		return error
	}
})
