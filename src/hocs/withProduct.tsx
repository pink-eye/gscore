import { useRouter } from 'next/router'
import React, { FC, useEffect } from 'react'
import Preloader from '../components/UI/Preloader'
import useAppSelector from '../hooks/useAppSelector'
import { IProduct } from '../types'

export interface ComponentPropsWithProduct {
	product?: IProduct
}

const withProduct = (Component: FC<ComponentPropsWithProduct>) => {
	const ProductComponent = () => {
		const router = useRouter()
		const product = useAppSelector(state => state.product)

		useEffect(() => {
			!product && router.push('/')
		}, [])

		return product ? <Component product={product} /> : <Preloader />
	}

	return ProductComponent
}

export default withProduct
