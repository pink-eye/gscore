import axios from 'axios'
import { IUser } from '../store/ducks/user/types'
import { IPasswordsData, IPersonalData } from '../types'
import API_PATHS from './constants'

interface Params {
	token?: string
}

const GScoreApi = () => {
	let token: string = null

	const axiosAuth = () =>
		axios.create({
			timeout: 1000,
			headers: { Authorization: `Bearer ${token}` },
		})

	const setToken = (params: Params = {}) => (token = params.token)

	// USERS

	const signIn = (user: IUser) => axios.post(`${API_PATHS.USERS}/sign-in`, user)

	const signUp = (user: IUser) => axios.post(`${API_PATHS.USERS}/sign-up`, user)

	const updatePassword = (data: IPasswordsData) => axiosAuth().patch(`${API_PATHS.USERS}/update-password`, data)

	const updatePersonal = (data: IPersonalData) => axiosAuth().patch(`${API_PATHS.USERS}/`, data)

	const getMe = () => axiosAuth().get(`${API_PATHS.USERS}/me`)

	// PRODUCTS

	const getProducts = () => axios.get(`${API_PATHS.PRODUCTS}/`)

	// PAYMENTS

	const buy = (body: { priceId: number }) => axiosAuth().post(`${API_PATHS.PAYMENTS}/buy`, body)

	// SUBSCRIBE

	const getSelfSubscribes = () => axiosAuth().get(`${API_PATHS.SUBSCRIBE}/self`)

	const changeProduct = (body: { subscribeId: number; productId: number }) =>
		axiosAuth().post(`${API_PATHS.SUBSCRIBE}/change-product`, body)

	// CODE

	const activateCode = (body: { code: string }) => axiosAuth().post(`${API_PATHS.CODE}/activate`, body)

	const manageCodes = (body: { codesIds: number[]; subscribeId: number }) =>
		axiosAuth().put(`${API_PATHS.CODE}/manage`, body)

	return {
		setToken,
		signIn,
		signUp,
		updatePassword,
		updatePersonal,
		getMe,
		getProducts,
		buy,
		getSelfSubscribes,
		changeProduct,
		activateCode,
		manageCodes,
	}
}

const gscoreApi = GScoreApi()

export default gscoreApi
