import { createApi } from '@reduxjs/toolkit/query/react'
import { authBaseQuery } from '../helper'

export const codeApi = createApi({
	reducerPath: 'api/code',
	baseQuery: authBaseQuery,
	tagTypes: ['Codes'],
	endpoints: builder => ({
		getCodes: builder.query({
			query: () => ({
				url: '/code/self',
				method: 'GET',
			}),
			providesTags: ['Codes'],
		}),
		activate: builder.mutation({
			query: (data: { code: string }) => ({
				url: '/code/activate',
				method: 'POST',
				body: data,
			}),
			invalidatesTags: ['Codes'],
		}),
	}),
})

export default codeApi

export const { useActivateMutation, useGetCodesQuery } = codeApi
