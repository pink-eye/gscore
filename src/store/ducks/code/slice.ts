import { createSlice } from '@reduxjs/toolkit'
import { IThunkState } from '../user/types'
import { activateCode } from './thunks'

const initialState: IThunkState = {
	isLoading: false,
	error: null,
	data: null,
}

export const codeSlice = createSlice({
	name: 'product',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder
			.addCase(activateCode.pending, state => {
				if (!state.isLoading) state.isLoading = true
			})
			.addCase(activateCode.fulfilled, (state, action) => {
				if (state.isLoading) {
					return { ...initialState, data: action.payload.data }
				}
			})
			.addCase(activateCode.rejected, (state, action) => {
				if (state.isLoading) {
					return { ...initialState, error: action.error.message }
				}
			})
	},
})

export const codeReducer = codeSlice.reducer
export const codeActions = codeSlice.actions
