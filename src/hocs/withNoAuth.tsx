import { useRouter } from 'next/router'
import React, { FC, useEffect } from 'react'
import Preloader from '../components/UI/Preloader'
import useAppSelector from '../hooks/useAppSelector'

const withNoAuth = (Component: FC) => {
	const NotAuthenticatedComponent = () => {
		const router = useRouter()
		const token = useAppSelector(state => state.token)

		useEffect(() => {
			token && router.push('/my-subscriptions')
		}, [token])

		return !token ? <Component /> : <Preloader />
	}

	return NotAuthenticatedComponent
}

export default withNoAuth
