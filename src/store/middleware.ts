import { Middleware, MiddlewareAPI, Dispatch, Action } from 'redux'
import gscoreApi from '../api'

const authMiddleware: Middleware = (store: MiddlewareAPI) => (next: Dispatch) => (action: Action) => {
	const state = store.getState()
	gscoreApi.setToken({ token: state.token })

	return next(action)
}

export default authMiddleware
