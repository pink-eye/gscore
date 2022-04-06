import type { NextPage } from 'next'
import PageWrapper from '../../app/components/PageWrapper'
import Settings from '../../app/components/Settings'
import Container from '../../app/components/UI/Container'

const SettingsPage: NextPage = () => {
	return (
		<PageWrapper title="Settings">
			<Container level='min'>
				<Settings />
			</Container>
		</PageWrapper>
	)
}

export default SettingsPage
