import { Middleware, MiddlewareAPI, Dispatch, Action } from 'redux'
import gscoreApi from '../api'
import { RootState } from '.'

const authMiddleware: Middleware = (store: MiddlewareAPI) => (next: Dispatch) => (action: Action) => {
	const state = store.getState() as RootState
	gscoreApi.setToken({ value: state.token.value })

	return next(action)
}

export default authMiddleware
