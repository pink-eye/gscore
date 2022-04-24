import type { NextPage } from 'next'
import Head from 'next/head'
import Container from '../../src/UI/Container'
import Heading from '../../src/UI/Heading'

const Error: NextPage = () => {
	return (
		<>
			<Head>
				<title>404</title>
			</Head>
			<Container>
				<Heading>404 go fuck urself</Heading>
			</Container>
		</>
	)
}

export default Error
