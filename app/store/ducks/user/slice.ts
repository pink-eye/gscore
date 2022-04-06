import { createSlice } from '@reduxjs/toolkit'
import { signIn, signUp, updatePassword, updatePersonal } from './thunks'
import { IUserState } from './types'

const initialState: IUserState = {
	isLoading: false,
	error: null,
	data: null,
}

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder
			.addCase(signUp.pending, state => {
				if (!state.isLoading) state.isLoading = true
			})
			.addCase(signUp.fulfilled, (state, action) => {
				if (state.isLoading) {
					state.isLoading = false
					state.data = action.payload
				}
			})
			.addCase(signUp.rejected, (state, action) => {
				if (state.isLoading) {
					state.isLoading = false
					state.error = action.error
				}
			})
		builder
			.addCase(signIn.pending, state => {
				if (!state.isLoading) state.isLoading = true
			})
			.addCase(signIn.fulfilled, (state, action) => {
				if (state.isLoading) {
					state.isLoading = false
					state.data = action.payload
				}
			})
			.addCase(signIn.rejected, (state, action) => {
				if (state.isLoading) {
					state.isLoading = false
					state.error = action.error
				}
			})
		builder
			.addCase(updatePersonal.pending, state => {
				if (!state.isLoading) state.isLoading = true
			})
			.addCase(updatePersonal.fulfilled, (state, action) => {
				if (state.isLoading) {
					state.isLoading = false
					state.data = action.payload
				}
			})
			.addCase(updatePersonal.rejected, (state, action) => {
				if (state.isLoading) {
					state.isLoading = false
					state.error = action.error
				}
			})
		builder
			.addCase(updatePassword.pending, state => {
				if (!state.isLoading) state.isLoading = true
			})
			.addCase(updatePassword.fulfilled, (state, action) => {
				if (state.isLoading) {
					state.isLoading = false
					state.data = action.payload
				}
			})
			.addCase(updatePassword.rejected, (state, action) => {
				if (state.isLoading) {
					state.isLoading = false
					state.error = action.error
				}
			})
	},
})

export const userReducer = userSlice.reducer
export const userActions = userSlice.actions
