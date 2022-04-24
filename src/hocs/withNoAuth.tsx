import { useRouter } from 'next/router'
import React, { FC, useEffect } from 'react'
import Preloader from '../components/UI/Preloader'
import useAppSelector from '../hooks/useAppSelector'

const withNoAuth = (Component: FC) => {
	const NotAuthenticatedComponent = () => {
		const router = useRouter()
		const { value } = useAppSelector(state => state.token)

		useEffect(() => {
			value && router.push('/my-subscriptions')
		}, [value])

		return !value ? <Component /> : <Preloader />
	}

	return NotAuthenticatedComponent
}

export default withNoAuth
