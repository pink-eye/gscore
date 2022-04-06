import { GetServerSideProps } from 'next'

export const getPrivatePage: GetServerSideProps = async context => {
	const sendRedirectLocation = (location: string) => {
		context.res.writeHead(302, {
			Location: location,
		})
		context.res.end()
		return { props: {} } // stop execution
	}

	// some auth logic here
	const hasAccess = false

	if (!hasAccess) sendRedirectLocation('/login')

	return {
		props: {}, // will be passed to the page component as props
	}
}

export default getPrivatePage
