import '../styles/reset.css'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { persistor, store } from '../app/store'
import { PersistGate } from 'redux-persist/integration/react'

export default function MyApp({ Component, pageProps }: AppProps) {
	return (
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<Component {...pageProps} />
			</PersistGate>
		</Provider>
	)
}
