import { createAsyncThunk } from '@reduxjs/toolkit'
import gscoreApi from '../../../api'

export const buy = createAsyncThunk('payments/buy', async (payload: { priceId: number }) => {
	return gscoreApi.buy(payload)
})
