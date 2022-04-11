import { createAsyncThunk } from '@reduxjs/toolkit'
import gscoreApi from '../../../api'
import { IPasswordsData, IPersonalData } from '../../../types'
import { IUser } from './types'

export const signUp = createAsyncThunk('users/signUp', async (user: IUser) => {
	return gscoreApi.signUp(user)
})

export const signIn = createAsyncThunk('users/signIn', (user: IUser) => {
	return gscoreApi.signIn(user)
})

export const updatePersonal = createAsyncThunk('users/updatePersonal', async (data: IPersonalData) => {
	return gscoreApi.updatePersonal(data)
})

export const updatePassword = createAsyncThunk('users/updatePassword', async (data: IPasswordsData) => {
	return gscoreApi.updatePassword(data)
})
