import axios from 'axios'
import { GetServerSideProps, InferGetServerSidePropsType, NextPage } from 'next'
import PageWrapper from '../app/components/PageWrapper'
import Start from '../app/components/Home'
import GScoreApi from '../app/api'

const HomePage: NextPage = ({ products }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
	return (
		<PageWrapper title="Home">
			<Start products={products} />
		</PageWrapper>
	)
}

export default HomePage

export const getServerSideProps: GetServerSideProps = async context => {
	const response = await GScoreApi().getProducts()

	if (!response) {
		return {
			notFound: true,
		}
	}

	return { props: { products: response.data } }
}
