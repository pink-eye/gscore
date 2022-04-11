import router from 'next/router'
import React, { useEffect } from 'react'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import styled from 'styled-components'
import withNoAuth from '../../hocs/withNoAuth'
import useActions from '../../hooks/useActions'
import useAppDispatch from '../../hooks/useAppDispatch'
import useAppSelector from '../../hooks/useAppSelector'
import { signUp } from '../../store/ducks/user/thunks'
import { IRegistryData } from '../../types'
import Button from '../UI/Button'
import Heading from '../UI/Heading'
import Input from '../UI/Input'
import Stepper from '../UI/Stepper'
import TextLink from '../UI/TextLink'
import Form from '../UI/Form'

const Registration = () => {
	const { setToken } = useActions()
	const dispatch = useAppDispatch()
	const { isLoading, error, data } = useAppSelector(state => state.user)
	const product = useAppSelector(state => state.product)

	const { handleSubmit, control } = useForm<IRegistryData>({
		mode: 'onTouched',
		defaultValues: {
			username: '',
			email: '',
			password: '',
		},
	})

	useEffect(() => {
		if (!data) return

		setToken(data.token)

		if (product) {
			router.push('/checkout')
		} else router.push('/my-subscriptions')
	}, [data])

	const onSubmit: SubmitHandler<IRegistryData> = async formData => {
		dispatch(signUp(formData))
	}

	const regexEmail =
		/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i

	return (
		<Root>
			<Stepper activeIndex={0} style={{ marginBottom: '64px' }} />
			<Heading>Create account</Heading>
			<Subtitle>You need to enter your name and email. We will send you a temporary password by email</Subtitle>
			<RegistrationForm onSubmit={handleSubmit(onSubmit)} submitError={error}>
				<Controller
					control={control}
					name="username"
					rules={{ required: 'Username is required' }}
					render={({ field, fieldState }) => {
						return (
							<Input type="text" placeholder="Username" {...field} ref={null} error={fieldState.error} />
						)
					}}
				/>
				<Controller
					control={control}
					name="email"
					rules={{ required: 'Email is required', pattern: regexEmail }}
					render={({ field, fieldState }) => {
						return <Input type="text" placeholder="Email" {...field} ref={null} error={fieldState.error} />
					}}
				/>
				<Controller
					control={control}
					name="password"
					rules={{ required: 'Password is required' }}
					render={({ field, fieldState }) => {
						return (
							<Input
								type="password"
								placeholder="Password"
								{...field}
								ref={null}
								error={fieldState.error}
							/>
						)
					}}
				/>
				<Button isLoading={isLoading} accent type="submit">
					Send password
				</Button>
			</RegistrationForm>
			<Bottom>
				<Question>Have an account?</Question>
				<TextLink href="/login">Go to the next step</TextLink>
			</Bottom>
		</Root>
	)
}

export default withNoAuth(Registration)

const Root = styled.section``

const Subtitle = styled.p`
	margin-top: 1rem;
	font-weight: 400;
	font-size: 0.9rem;
	line-height: 1.5rem;

	color: #ffffff;
`

const RegistrationForm = styled(Form)`
	display: flex;
	flex-direction: column;
	align-items: start;
	margin-top: 2rem;
	gap: 24px;

	& > button {
		margin-top: 1.5rem;
	}
`

const Bottom = styled.div`
	display: flex;
	align-items: center;
	gap: 10px;
	margin-top: 3rem;
`

const Question = styled.span`
	color: #fff;
	font-weight: 500;
	font-size: 1.125rem;
	line-height: 1.875rem;
`
