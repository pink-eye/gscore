import axios from 'axios'
import { API_PATHS } from '../constants'

const GScoreApi = () => {
	// PRODUCTS

	const getProducts = () => axios.get(`${API_PATHS.PRODUCTS}/`)

	return { getProducts }
}

const gscoreApi = GScoreApi()

export default gscoreApi
