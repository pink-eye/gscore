import { fetchBaseQuery } from '@reduxjs/toolkit/dist/query'
import { RootState } from '..'
import { BASE_URL } from '../../constants'

export const authBaseQuery = fetchBaseQuery({
	baseUrl: BASE_URL,
	prepareHeaders: (headers, state) => {
		const {
			token: { value },
		} = state.getState() as RootState

		if (value) headers.set('authorization', `Bearer ${value}`)

		return headers
	},
})
