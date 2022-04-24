import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { tokenReducer, productReducer, sidebarReducer } from './ducks'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import userApi from './ducks/user/api'
import paymentApi from './ducks/payment/api'
import codeApi from './ducks/code/api'

const combinedReducer = combineReducers({
	[userApi.reducerPath]: userApi.reducer,
	[paymentApi.reducerPath]: paymentApi.reducer,
	[codeApi.reducerPath]: codeApi.reducer,
	token: tokenReducer,
	product: productReducer,
	sidebar: sidebarReducer,
})

// REDUX-PERSIST LOGIC

const persistConfig = {
	key: 'root',
	storage,
	whitelist: ['token'],
}

const persistedReducer = persistReducer(persistConfig, combinedReducer)

export const store = configureStore({
	reducer: persistedReducer,
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware({
			serializableCheck: false,
		})
			.concat(userApi.middleware)
			.concat(paymentApi.middleware)
			.concat(codeApi.middleware),
})

export const persistor = persistStore(store)

// TYPES

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
