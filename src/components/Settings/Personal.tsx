import React, { useEffect } from 'react'
import { useForm, SubmitHandler, Controller } from 'react-hook-form'
import styled from 'styled-components'
import { IPersonalData } from '../../types'
import Button from '../../UI/Button'
import Input from '../../UI/Input'
import Form from '../../UI/Form'
import { REGEX } from '../../constants'
import { useUpdatePersonalMutation } from '../../store/ducks/user/api'

const Personal = () => {
	const [updatePersonal, { isLoading, error }] = useUpdatePersonalMutation()

	const { handleSubmit, control, reset } = useForm<IPersonalData>({
		mode: 'onTouched',
		defaultValues: {
			username: '',
			email: '',
		},
	})

	const onSubmit: SubmitHandler<IPersonalData> = data => {
		updatePersonal(data).then(() => reset())
	}

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
				rules={{
					required: 'Email is required',
					pattern: { value: REGEX.email, message: 'Email is not valid' },
				}}
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
