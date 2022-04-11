import { GetServerSideProps, InferGetServerSidePropsType, NextPage } from 'next'
import Home from '../src/components/Home'
import gscoreApi from '../src/api'
import Head from 'next/head'
import Container from '../src/components/UI/Container'

const HomePage: NextPage = ({ products }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
	return (
		<>
			<Head>
				<title>Home</title>
			</Head>
			<Container>
				<Home products={products} />
			</Container>
		</>
	)
}

export default HomePage

export const getServerSideProps: GetServerSideProps = async () => {
	const response = await gscoreApi.getProducts()

	if (!response) {
		return {
			notFound: true,
		}
	}

	return { props: { products: response.data } }
}
