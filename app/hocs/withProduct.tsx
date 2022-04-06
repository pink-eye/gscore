import { useRouter } from 'next/router'
import React, { FC, useEffect } from 'react'
import Preloader from '../components/UI/Preloader'
import useAppSelector from '../hooks/useAppSelector'

const withProduct = (Component: FC) => {
	const ProductComponent = () => {
		const router = useRouter()
		const product = useAppSelector(state => state.product)

		useEffect(() => {
			!product && router.push('/')
		}, [])

		return product ? <Component /> : <Preloader />
	}

	return ProductComponent
}

export default withProduct
