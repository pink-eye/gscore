import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IProduct } from '../../../types'

const initialState = <IProduct>{}

export const productSlice = createSlice({
	name: 'product',
	initialState,
	reducers: {
		addProduct: (state, action: PayloadAction<IProduct>) => action.payload,
	},
})

export const productReducer = productSlice.reducer
export const productActions = productSlice.actions
