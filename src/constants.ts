export const BASE_URL = 'https://gscore-back.herokuapp.com/api'

export const API_PATHS = {
	USERS: `${BASE_URL}/users`,
	PRODUCTS: `${BASE_URL}/products`,
	PAYMENTS: `${BASE_URL}/payments`,
	SUBSCRIBE: `${BASE_URL}/subscribe`,
	CODE: `${BASE_URL}/code`,
}

export const REGEX = {
	email: /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
}
