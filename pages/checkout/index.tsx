import { NextPage } from 'next'
import PageWrapper from '../../app/components/PageWrapper'
import Container from '../../app/components/UI/Container'
import Checkout from '../../app/components/Checkout'

const LoginPage: NextPage = () => {
	return (
		<PageWrapper title="Checkout">
			<Container level="min">
				<Checkout />
			</Container>
		</PageWrapper>
	)
}

export default LoginPage
