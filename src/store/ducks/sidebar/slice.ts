import { createSlice } from '@reduxjs/toolkit'

const initialState: boolean = false

export const sidebarSlice = createSlice({
	name: 'sidebar',
	initialState,
	reducers: {
		toggleSidebar: state => !state,
	},
})

export const sidebarReducer = sidebarSlice.reducer
export const sidebarActions = sidebarSlice.actions
