import { createApi } from '@reduxjs/toolkit/query/react'
import { authBaseQuery } from '../helper'

export const userApi = createApi({
	reducerPath: 'api/users',
	baseQuery: authBaseQuery,
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
