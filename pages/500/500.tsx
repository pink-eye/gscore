import type { NextPage } from 'next'
import Head from 'next/head'
import Container from '../../src/UI/Container'
import Heading from '../../src/UI/Heading'

const InternalErrorPage: NextPage = () => {
	return (
		<>
			<Head>
				<title>500</title>
			</Head>
			<Container>
				<Heading>500 Sorry my bad...</Heading>
			</Container>
		</>
	)
}

export default InternalErrorPage
