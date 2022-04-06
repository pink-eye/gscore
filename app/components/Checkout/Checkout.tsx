import { useRouter } from 'next/router'
import React from 'react'
import styled from 'styled-components'
import GScoreApi from '../../api'
import withAuth from '../../hocs/withAuth'
import withProduct from '../../hocs/withProduct'
import useAppSelector from '../../hooks/useAppSelector'
import Button from '../UI/Button'
import Heading from '../UI/Heading'

const Checkout = () => {
	const router = useRouter()
	const product = useAppSelector(state => state.product)
	const token = useAppSelector(state => state.token)

	if (!product) router.push('/')

	const handleClick = async () => {
		await GScoreApi({ token }).buy({ priceId: product.prices[0].id })
		router.push('/start')
	}

	return (
		<>
			<Heading>Checkout</Heading>
			<CheckoutTotal>
				<CheckoutTotalLabel>Total:</CheckoutTotalLabel>
				<CheckoutTotalSummary>${product.prices[0].price}</CheckoutTotalSummary>
			</CheckoutTotal>
			<Button onClick={handleClick}>Purchase</Button>
		</>
	)
}

export default withAuth(withProduct(Checkout))

const CheckoutTable = styled.div``

const CheckoutTotal = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
`

const CheckoutTotalLabel = styled.div`
	font-weight: 700;
	font-size: 1.75rem;
	line-height: 2.5rem;

	color: #ffffff;
`

const CheckoutTotalSummary = styled.span`
	font-weight: 700;
	font-size: 1.75rem;
	line-height: 2.5rem;

	color: #ffffff;
`
