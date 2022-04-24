import { useRouter } from 'next/router'
import React, { FC, useEffect } from 'react'
import Preloader from '../UI/Preloader'
import useAppSelector from '../hooks/useAppSelector'

const withAuth = (Component: FC) => {
	const AuthenticatedComponent = () => {
		const router = useRouter()
		const { value } = useAppSelector(state => state.token)

		useEffect(() => {
			!value && router.push('/registry')
		}, [value])

		return value ? <Component /> : <Preloader />
	}

	return AuthenticatedComponent
}

export default withAuth
