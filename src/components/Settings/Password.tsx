import React from 'react'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import styled from 'styled-components'
import useAppDispatch from '../../hooks/useAppDispatch'
import useAppSelector from '../../hooks/useAppSelector'
import { updatePassword } from '../../store/ducks/user/thunks'
import { IPasswordsData } from '../../types'
import Button from '../UI/Button'
import Input from '../UI/Input'
import Form from '../UI/Form'

const Password = () => {
	const { isLoading, error } = useAppSelector(state => state.user)

	const dispatch = useAppDispatch()

	const { handleSubmit, control } = useForm<IPasswordsData>({
		mode: 'onTouched',
		defaultValues: {
			currentPassword: '',
			newPassword: '',
		},
	})

	const onSubmit: SubmitHandler<IPasswordsData> = data => {
		dispatch(updatePassword(data)).then(() => {
			location.reload()
		})
	}

	return (
		<Root onSubmit={handleSubmit(onSubmit)} submitError={error}>
			<FormLegend>Change password</FormLegend>
			<Controller
				control={control}
				name="currentPassword"
				rules={{ required: 'The field is required' }}
				render={({ field, fieldState }) => {
					return (
						<Input
							type="password"
							placeholder="Current password"
							{...field}
							ref={null}
							error={fieldState.error}
						/>
					)
				}}
			/>
			<Controller
				control={control}
				name="newPassword"
				rules={{ required: 'The field is required' }}
				render={({ field, fieldState }) => {
					return (
						<Input
							type="password"
							placeholder="New password"
							{...field}
							ref={null}
							error={fieldState.error}
						/>
					)
				}}
			/>
			<Button isLoading={isLoading} accent type="submit">
				Save
			</Button>
		</Root>
	)
}

export default Password

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
