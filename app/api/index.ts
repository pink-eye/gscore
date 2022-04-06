import axios from 'axios'
import { IUpdatePassword, IUser } from '../store/ducks/user/types'

interface Params {
	token?: string
}

const GScoreApi = (params: Params = {}) => {
	const BASE_URL = 'https://gscore-back.herokuapp.com/api'

	const axiosAuth = axios.create({
		timeout: 1000,
		headers: { Authorization: `Bearer ${params.token}` },
	})

	// USERS

	const signIn = (user: IUser) => axios.post(`${BASE_URL}/users/sign-in`, user)

	const signUp = (user: IUser) => axios.post(`${BASE_URL}/users/sign-up`, user)

	const updatePassword = (passwords: IUpdatePassword) =>
		axiosAuth.post(`${BASE_URL}/users/update-password`, passwords)

	const updatePersonal = (user: IUser) => axiosAuth.post(`${BASE_URL}/users/`, user)

	const getMe = () => axiosAuth.get(`${BASE_URL}/users/me`)

	// PRODUCTS

	const getProducts = () => axios.get(`${BASE_URL}/products`)

	// PAYMENTS

	const buy = ({ priceId }: { priceId: number }) => axiosAuth.post(`${BASE_URL}/payments/buy`, { priceId })

	return { signIn, signUp, updatePassword, updatePersonal, getMe, getProducts, buy }
}

export default GScoreApi
