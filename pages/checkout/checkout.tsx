import { NextPage } from 'next'
import Container from '../../src/components/UI/Container'
import Checkout from '../../src/components/Checkout'
import Head from 'next/head'

const CheckoutPage: NextPage = () => {
	return (
		<>
			<Head>
				<title>Checkout</title>
			</Head>
			<Container level="min">
				<Checkout />
			</Container>
		</>
	)
}

export default CheckoutPage
