import { NextPage } from 'next'
import PageWrapper from '../../app/components/PageWrapper'
import Registration from '../../app/components/Registration'
import Container from '../../app/components/UI/Container'

const SignUpPage: NextPage = () => {
	return (
		<PageWrapper
			title="Create account
		">
			<Container level="min">
				<Registration />
			</Container>
		</PageWrapper>
	)
}

export default SignUpPage
