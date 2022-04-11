import React, { useEffect } from 'react'
import { useForm, SubmitHandler, Controller } from 'react-hook-form'
import styled from 'styled-components'
import useAppDispatch from '../../hooks/useAppDispatch'
import useAppSelector from '../../hooks/useAppSelector'
import { updatePersonal } from '../../store/ducks/user/thunks'
import { IPersonalData } from '../../types'
import Button from '../UI/Button'
import Input from '../UI/Input'
import Form from '../UI/Form'

const Personal = () => {
	const dispatch = useAppDispatch()
	const { isLoading, error, data } = useAppSelector(state => state.user)

	const { handleSubmit, control } = useForm<IPersonalData>({
		mode: 'onTouched',
		defaultValues: {
			username: '',
			email: '',
		},
	})

	useEffect(() => {
		if (!data) return

		location.reload()
	}, [data])

	const onSubmit: SubmitHandler<IPersonalData> = data => {
		dispatch(updatePersonal(data))
	}

	const regexEmail =
		/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i

	return (
		<Root onSubmit={handleSubmit(onSubmit)} submitError={error}>
			<FormLegend>Personal info</FormLegend>
			<Controller
				control={control}
				name="username"
				rules={{ required: 'Username is required' }}
				render={({ field, fieldState }) => {
					return <Input type="text" placeholder="Username" {...field} ref={null} error={fieldState.error} />
				}}
			/>
			<Controller
				control={control}
				name="email"
				rules={{ required: 'Email is required', pattern: { value: regexEmail, message: 'Email is not valid' } }}
				render={({ field, fieldState }) => {
					return <Input type="text" placeholder="Email" {...field} ref={null} error={fieldState.error} />
				}}
			/>
			<Button isLoading={isLoading} accent type="submit">
				Save
			</Button>
		</Root>
	)
}

export default Personal

const Root = styled(Form)`
	display: flex;
	flex-direction: column;
	gap: 24px;
	align-items: flex-start;

	& > button {
		margin-top: 24px;
	}
`

const FormLegend = styled.legend`
	font-weight: 700;
	font-size: 1.75rem;
	line-height: 2.5rem;
	color: #ffffff;
`
