import { createSlice } from '@reduxjs/toolkit'
import { signIn, signUp, updatePassword, updatePersonal } from './thunks'
import { IThunkState } from './types'

const initialState: IThunkState = {
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
					return { ...initialState, data: action.payload.data }
				}
			})
			.addCase(signUp.rejected, (state, action) => {
				if (state.isLoading) {
					return { ...initialState, error: action.error.message }
				}
			})
		builder
			.addCase(signIn.pending, state => {
				if (!state.isLoading) state.isLoading = true
			})
			.addCase(signIn.fulfilled, (state, action) => {
				if (state.isLoading) {
					return { ...initialState, data: action.payload.data }
				}
			})
			.addCase(signIn.rejected, (state, action) => {
				if (state.isLoading) {
					return { ...initialState, error: action.error.message }
				}
			})
		builder
			.addCase(updatePersonal.pending, state => {
				if (!state.isLoading) state.isLoading = true
			})
			.addCase(updatePersonal.fulfilled, (state, action) => {
				if (state.isLoading) {
					return { ...initialState, data: action.payload.data }
				}
			})
			.addCase(updatePersonal.rejected, (state, action) => {
				if (state.isLoading) {
					return { ...initialState, error: action.error.message }
				}
			})
		builder
			.addCase(updatePassword.pending, state => {
				if (!state.isLoading) state.isLoading = true
			})
			.addCase(updatePassword.fulfilled, (state, action) => {
				if (state.isLoading) {
					return { ...initialState, data: action.payload.data }
				}
			})
			.addCase(updatePassword.rejected, (state, action) => {
				if (state.isLoading) {
					return { ...initialState, error: action.error.message }
				}
			})
	},
})

export const userReducer = userSlice.reducer
export const userActions = userSlice.actions
