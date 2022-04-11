import { createSlice } from '@reduxjs/toolkit'
import { IThunkState } from '../user/types'
import { buy } from './thunks'

const initialState: IThunkState = {
	isLoading: false,
	error: null,
	data: null,
}

export const paymentSlice = createSlice({
	name: 'product',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder
			.addCase(buy.pending, state => {
				if (!state.isLoading) state.isLoading = true
			})
			.addCase(buy.fulfilled, (state, action) => {
				if (state.isLoading) {
					return { ...initialState, data: action.payload.data }
				}
			})
			.addCase(buy.rejected, (state, action) => {
				if (state.isLoading) {
					return { ...initialState, error: action.error.message }
				}
			})
	},
})

export const paymentReducer = paymentSlice.reducer
export const paymentActions = paymentSlice.actions
