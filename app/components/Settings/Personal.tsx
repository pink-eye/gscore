import React from 'react'
import { useForm, SubmitHandler, Controller } from 'react-hook-form'
import useAppDispatch from '../../hooks/useAppDispatch'
import useAppSelector from '../../hooks/useAppSelector'
import { updatePersonal } from '../../store/ducks/user/thunks'
import { IPersonalData } from '../../types'
import Button from '../UI/Button'
import Heading from '../UI/Heading'
import Input from '../UI/Input'

const Personal = () => {
	const dispatch = useAppDispatch()
	const { isLoading, error } = useAppSelector(state => state.user)

	const { handleSubmit, control } = useForm<IPersonalData>({
		mode: 'onTouched',
	})

	const onSubmit: SubmitHandler<IPersonalData> = data => {
		console.log('Personal > data', data)
		dispatch(updatePersonal(data))
	}

	const regexEmail =
		/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			{isLoading && <Heading>Loading ...</Heading>}
			<Controller
				control={control}
				name="username"
				rules={{ required: 'Username is required' }}
				render={({ field, fieldState }) => {
					return <Input type="text" placeholder="Username" {...field} error={fieldState.error} />
				}}
			/>
			<Controller
				control={control}
				name="email"
				rules={{ required: 'Email is required', pattern: regexEmail }}
				render={({ field, fieldState }) => {
					return <Input type="text" placeholder="Email" {...field} error={fieldState.error} />
				}}
			/>
			<Button type="submit">Save</Button>
			{error && <Heading>error</Heading>}
		</form>
	)
}

export default Personal
