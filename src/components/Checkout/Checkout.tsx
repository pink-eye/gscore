import { useRouter } from 'next/router'
import React, { FC, useEffect } from 'react'
import withAuth from '../../hocs/withAuth'
import withProduct, { ComponentPropsWithProduct } from '../../hocs/withProduct'
import useAppDispatch from '../../hooks/useAppDispatch'
import useAppSelector from '../../hooks/useAppSelector'
import { buy } from '../../store/ducks/payment/thunks'
import Button from '../../UI/Button'
import Check from '../../UI/Check'
import Heading from '../../UI/Heading'
import Stepper from '../../UI/Stepper'

const Checkout: FC<ComponentPropsWithProduct> = ({ product }) => {
	const { isLoading, error, data } = useAppSelector(state => state.payment)
	const dispatch = useAppDispatch()
	const router = useRouter()

	useEffect(() => {
		if (!data) return

		router.push('/start')
	}, [data])

	const handleClick = async () => {
		const productPrice = { priceId: product.prices[0].id }

		dispatch(buy(productPrice))
	}

	return (
		<>
			<Stepper activeIndex={2} style={{ marginBottom: '64px' }} />
			<Heading>Checkout</Heading>
			<Check product={product} />
			<Button isLoading={isLoading} accent onClick={handleClick}>
				Purchase
			</Button>
		</>
	)
}

export default withAuth(withProduct(Checkout))
