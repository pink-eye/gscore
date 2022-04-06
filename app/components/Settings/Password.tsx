import React from 'react'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import GScoreApi from '../../api'
import useAppDispatch from '../../hooks/useAppDispatch'
import useAppSelector from '../../hooks/useAppSelector'
import { updatePassword } from '../../store/ducks/user/thunks'
import { IPasswordsData } from '../../types'
import Button from '../UI/Button'
import Heading from '../UI/Heading'
import Input from '../UI/Input'

const Password = () => {
	const { isLoading, error } = useAppSelector(state => state.user)

	const dispatch = useAppDispatch()

	const { handleSubmit, control } = useForm<IPasswordsData>({
		mode: 'onTouched',
	})

	const onSubmit: SubmitHandler<IPasswordsData> = data => {
		console.log('Passwords > data', data)
		dispatch(updatePassword(data))
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			{isLoading && <Heading>Loading ...</Heading>}
			<Controller
				control={control}
				name="currentPassword"
				rules={{ required: 'The field is required' }}
				render={({ field, fieldState }) => {
					return <Input type="password" placeholder="Current password" {...field} error={fieldState.error} />
				}}
			/>
			<Controller
				control={control}
				name="newPassword"
				rules={{ required: 'The field is required' }}
				render={({ field, fieldState }) => {
					return <Input type="password" placeholder="New password" {...field} error={fieldState.error} />
				}}
			/>
			<Button type="submit">Save</Button>
			{error && <Heading>{error}</Heading>}
		</form>
	)
}

export default Password
