import { NextPage } from 'next'
import Head from 'next/head'
import MySubscriptions from '../../src/components/MySubscriptions'
import Container from '../../src/components/UI/Container'

const MySubscriptionsPage: NextPage = () => {
	return (
		<>
			<Head>
				<title>My subscriptions</title>
			</Head>
			<Container>
				<MySubscriptions />
			</Container>
		</>
	)
}

export default MySubscriptionsPage
