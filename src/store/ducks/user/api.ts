import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { RootState } from '../..'
import { BASE_URL } from '../../../constants'

const baseQuery = fetchBaseQuery({
	baseUrl: BASE_URL,
	prepareHeaders: (headers, state) => {
		const {
			token: { value },
		} = state.getState() as RootState

		if (value) headers.set('authorization', `Bearer ${value}`)

		return headers
	},
})

export const userApi = createApi({
	reducerPath: 'api/users',
	baseQuery,
	endpoints: builder => ({
		getMe: builder.query({
			query: () => ({
				url: '/users/me',
				method: 'GET',
			}),
		}),
		getSelfSubscribes: builder.query({
			query: () => ({
				url: '/subscribe/self',
				method: 'GET',
			}),
		}),
	}),
})

export default userApi

export const { useGetMeQuery, useGetSelfSubscribesQuery } = userApi
