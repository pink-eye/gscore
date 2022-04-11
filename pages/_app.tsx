import '../styles/reset.css'
import '../styles/fonts.css'
import type { AppProps } from 'next/app'
import { persistor, store } from '../src/store'
import { PersistGate } from 'redux-persist/integration/react'
import { createGlobalStyle } from 'styled-components'
import { Provider } from 'react-redux'
import PageWrapper from '../src/components/PageWrapper'
import Head from 'next/head'

const GlobalStyle = createGlobalStyle`
	body {
		font-family: 'THICCCBOI', sans-serif;
	}
`

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<GlobalStyle />
				<Head>
					<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				</Head>
				<PageWrapper>
					<Component {...pageProps} />
				</PageWrapper>
			</PersistGate>
		</Provider>
	)
}

export default MyApp
