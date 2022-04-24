import { bindActionCreators } from '@reduxjs/toolkit'
import useAppDispatch from './useAppDispatch'
import { tokenActions } from '../store/ducks/token/slice'
import { productActions } from '../store/ducks/product/slice'
import { sidebarActions } from '../store/ducks/sidebar/slice'

const allActions = {
	...tokenActions,
	...productActions,
	...sidebarActions,
}

const useActions = () => {
	const dispatch = useAppDispatch()

	return bindActionCreators(allActions, dispatch)
}

export default useActions
