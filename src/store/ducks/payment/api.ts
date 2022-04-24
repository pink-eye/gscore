import { createApi } from '@reduxjs/toolkit/query/react'
import { authBaseQuery } from '../helper'

export const paymentApi = createApi({
	reducerPath: 'api/payments',
	baseQuery: authBaseQuery,
	endpoints: builder => ({
		buy: builder.mutation({
			query: (data: { priceId: number }) => ({
				url: '/payments/buy',
				method: 'POST',
				body: data,
			}),
		}),
	}),
})

export default paymentApi

export const { useBuyMutation } = paymentApi
