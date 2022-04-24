import type { NextPage } from 'next'
import Head from 'next/head'
import Settings from '../../src/components/Settings'
import Container from '../../src/UI/Container'

const SettingsPage: NextPage = () => {
	return (
		<>
			<Head>
				<title>Settings</title>
			</Head>
			<Container>
				<Settings />
			</Container>
		</>
	)
}

export default SettingsPage
