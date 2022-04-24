import { NextPage } from 'next'
import Head from 'next/head'
import Registration from '../../src/components/Registration'
import Container from '../../src/UI/Container'

const RegistrationPage: NextPage = () => {
	return (
		<>
			<Head>
				<title>Registry</title>
			</Head>
			<Container level="min">
				<Registration />
			</Container>
		</>
	)
}

export default RegistrationPage
