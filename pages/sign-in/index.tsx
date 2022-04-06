import { NextPage } from 'next'
import PageWrapper from '../../app/components/PageWrapper'
import Login from '../../app/components/Login'
import Container from '../../app/components/UI/Container'

const SignInPage: NextPage = () => {
	return (
		<PageWrapper title="Log in">
			<Container level="min">
				<Login />
			</Container>
		</PageWrapper>
	)
}

export default SignInPage
