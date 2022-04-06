import { bindActionCreators } from '@reduxjs/toolkit'
import useAppDispatch from './useAppDispatch'
import { tokenActions } from '../store/ducks/token/slice'
import { userActions } from '../store/ducks/user/slice'
import { productActions } from '../store/ducks/product/slice'

const allActions = {
	...tokenActions,
	...userActions,
	...productActions,
}

const useActions = () => {
	const dispatch = useAppDispatch()

	return bindActionCreators(allActions, dispatch)
}

export default useActions
