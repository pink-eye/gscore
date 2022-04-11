import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { userReducer, tokenReducer, productReducer, paymentReducer, codeReducer, sidebarReducer } from './ducks'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import userApi from './ducks/user/api'
import authMiddleware from './middleware'

const combinedReducer = combineReducers({
	[userApi.reducerPath]: userApi.reducer,
	token: tokenReducer,
	user: userReducer,
	product: productReducer,
	payment: paymentReducer,
	code: codeReducer,
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
		}).concat(authMiddleware),
})

export const persistor = persistStore(store)

// TYPES

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
