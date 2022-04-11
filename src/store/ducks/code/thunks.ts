import { createAsyncThunk } from '@reduxjs/toolkit'
import gscoreApi from '../../../api'

export const activateCode = createAsyncThunk('code/active', async (payload: { code: string }) => {
	return gscoreApi.activateCode(payload)
})

export const manageCodes = createAsyncThunk(
	'code/manage',
	async (payload: { codesIds: number[]; subscribeId: number }) => {
		return gscoreApi.manageCodes(payload)
	}
)
