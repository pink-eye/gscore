import { NextPage } from 'next'
import Head from 'next/head'
import Start from '../../src/components/Start'
import Container from '../../src/components/UI/Container'

const StartPage: NextPage = () => {
	return (
		<>
			<Head>
				<title>Start your subscription</title>
			</Head>
			<Container level="min">
				<Start />
			</Container>
		</>
	)
}

export default StartPage
