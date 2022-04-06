import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { RootState } from '../..'

const baseQuery = fetchBaseQuery({
	baseUrl: 'https://gscore-back.herokuapp.com/',
	prepareHeaders: (headers, state) => {
		const token = (state.getState() as RootState).token

		if (token) headers.set('authorization', `Bearer ${token}`)

		return headers
	},
})

export const userApi = createApi({
	reducerPath: 'api/users',
	baseQuery,
	endpoints: builder => ({
		getMe: builder.query({
			query: () => ({
				url: '/me',
				method: 'GET',
			}),
		}),
	}),
})

export default userApi

export const { useGetMeQuery } = userApi
