import { combineReducers, configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { userReducer, tokenReducer, productReducer } from './ducks'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const rootReducer = combineReducers({
	// [userApi.reducerPath]: userApi.reducer,
	token: tokenReducer,
	user: userReducer,
	product: productReducer,
})

const persistConfig = {
	key: 'root',
	storage,
	whitelist: ['token'],
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
	reducer: persistedReducer,
	middleware: getDefaultMiddleware({
		serializableCheck: false,
	}),
})

export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
