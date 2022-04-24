import { useRouter } from 'next/router'
import React, { FC, useEffect } from 'react'
import withAuth from '../../hocs/withAuth'
import withProduct, { ComponentPropsWithProduct } from '../../hocs/withProduct'
import { useBuyMutation } from '../../store/ducks/payment/api'
import Button from '../../UI/Button'
import Check from '../../UI/Check'
import Heading from '../../UI/Heading'
import Stepper from '../../UI/Stepper'

const Checkout: FC<ComponentPropsWithProduct> = ({ product }) => {
	const [buy, { isLoading, data }] = useBuyMutation()
	const router = useRouter()

	useEffect(() => {
		if (!data) return

		router.push('/start')
	}, [data])

	const handleClick = async () => {
		const productPrice = { priceId: product.prices[0].id }

		buy(productPrice)
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
