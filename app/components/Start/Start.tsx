import router from 'next/router'
import React from 'react'
import withAuth from '../../hocs/withAuth'
import withProduct from '../../hocs/withProduct'
import useAppSelector from '../../hooks/useAppSelector'
import Button from '../UI/Button'
import Heading from '../UI/Heading'

const Start = () => {
	const product = useAppSelector(state => state.product)

	if (!product) router.push('/')

	const handleClick = () => router.push('/my-subscriptions')

	return (
		<>
			<Heading>Start your subscription</Heading>
			<span>{product.prices[0].price}</span>
			<Button onClick={handleClick}>Go to my subscriptions</Button>
		</>
	)
}

export default withAuth(withProduct(Start))
