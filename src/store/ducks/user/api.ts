import { createApi } from '@reduxjs/toolkit/query/react'
import { IPasswordsData, IPersonalData } from '../../../types'
import { authBaseQuery } from '../helper'
import { IUser } from './types'

export const userApi = createApi({
	reducerPath: 'api/users',
	baseQuery: authBaseQuery,
	tagTypes: ['User'],
	endpoints: builder => ({
		getMe: builder.query({
			query: () => ({
				url: '/users/me',
				method: 'GET',
			}),
			providesTags: ['User'],
		}),
		getSelfSubscribes: builder.query({
			query: () => ({
				url: '/subscribe/self',
				method: 'GET',
			}),
		}),
		signUp: builder.mutation({
			query: (user: IUser) => ({
				url: '/users/sign-up',
				method: 'POST',
				body: user,
			}),
		}),
		signIn: builder.mutation({
			query: (user: IUser) => ({
				url: '/users/sign-in',
				method: 'POST',
				body: user,
			}),
		}),
		updatePersonal: builder.mutation({
			query: (data: IPersonalData) => ({
				url: '/users',
				method: 'PATCH',
				body: data,
			}),
			invalidatesTags: ['User'],
		}),
		updatePassword: builder.mutation({
			query: (data: IPasswordsData) => ({
				url: '/users/update-password',
				method: 'PATCH',
				body: data,
			}),
		}),
	}),
})

export default userApi

export const {
	useGetMeQuery,
	useGetSelfSubscribesQuery,
	useSignInMutation,
	useSignUpMutation,
	useUpdatePasswordMutation,
	useUpdatePersonalMutation,
} = userApi
