import React from 'react'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import styled from 'styled-components'
import useAppDispatch from '../../hooks/useAppDispatch'
import useAppSelector from '../../hooks/useAppSelector'
import { signUp } from '../../store/ducks/user/thunks'
import { IFormValuesRegistry } from '../../types'
import Button from '../UI/Button'
import Heading from '../UI/Heading'
import Input from '../UI/Input'
import TextLink from '../UI/TextLink'

const Registration = () => {
	const dispatch = useAppDispatch()
	const { isLoading, data, error } = useAppSelector(state => state.user)

	const { handleSubmit, control } = useForm<IFormValuesRegistry>({
		mode: 'onTouched',
	})

	const onSubmit: SubmitHandler<IFormValuesRegistry> = data => {
		dispatch(signUp(data))
	}

	const regexEmail =
		/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i

	return (
		<Root>
			<Heading>Create account {isLoading && <span>Loading...</span>}</Heading>
			<RegistrationSubtitle>
				You need to enter your name and email. We will send you a temporary password by email
			</RegistrationSubtitle>
			<RegistrationForm onSubmit={handleSubmit(onSubmit)}>
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
				<Controller
					control={control}
					name="password"
					rules={{ required: 'Password is required' }}
					render={({ field, fieldState }) => {
						return <Input type="password" placeholder="Password" {...field} error={fieldState.error} />
					}}
				/>
				<Button type="submit">Send password</Button>
				{error && <span>error</span>}
			</RegistrationForm>
			<RegistrationBottom>
				<RegistrationQuestion>Have an account?</RegistrationQuestion>
				<TextLink href="/sign-in">Go to the next step</TextLink>
			</RegistrationBottom>
		</Root>
	)
}

export default Registration

const Root = styled.section``

const RegistrationSubtitle = styled.p`
	margin-top: 16px;
	font-weight: 400;
	font-size: 0.9rem;
	line-height: 1.5rem;

	color: #ffffff;
`

const RegistrationForm = styled.form`
	display: flex;
	flex-direction: column;
	align-items: start;
	margin-top: 32px;
	gap: 24px;

	& > button {
		margin-top: 24px;
	}
`

const RegistrationBottom = styled.div`
	display: flex;
	align-items: center;
	gap: 10px;
	margin-top: 48px;
`

const RegistrationQuestion = styled.span`
	color: #fff;
	font-weight: 500;
	font-size: 1.125rem;
	line-height: 1.875rem;
`
