import { NextPage } from 'next'
import Head from 'next/head'
import Login from '../../src/components/Login'
import Container from '../../src/components/UI/Container'

const LoginPage: NextPage = () => {
	return (
		<>
			<Head>
				<title>Log in</title>
			</Head>
			<Container level="min">
				<Login />
			</Container>
		</>
	)
}

export default LoginPage
