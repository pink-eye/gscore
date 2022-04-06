import { NextPage } from 'next'
import PageWrapper from '../../app/components/PageWrapper'
import Start from '../../app/components/Start'
import Container from '../../app/components/UI/Container'

const StartSubPage: NextPage = () => {
	return (
		<PageWrapper title="Start your subscription">
			<Container level="min">
				<Start />
			</Container>
		</PageWrapper>
	)
}

export default StartSubPage
