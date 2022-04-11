import { useRouter } from 'next/router'
import React, { FC, useEffect } from 'react'
import Preloader from '../components/UI/Preloader'
import useAppSelector from '../hooks/useAppSelector'

const withAuth = (Component: FC) => {
	const AuthenticatedComponent = () => {
		const router = useRouter()
		const token = useAppSelector(state => state.token)

		useEffect(() => {
			!token && router.push('/registry')
		}, [token])

		return token ? <Component /> : <Preloader />
	}

	return AuthenticatedComponent
}

export default withAuth
