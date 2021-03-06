import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { SubmitHandler, useForm, Controller } from 'react-hook-form'
import styled from 'styled-components'
import withNoAuth from '../../hocs/withNoAuth'
import useActions from '../../hooks/useActions'
import useAppSelector from '../../hooks/useAppSelector'
import { ILoginData } from '../../types'
import Button from '../../UI/Button'
import Heading from '../../UI/Heading'
import Input from '../../UI/Input'
import Stepper from '../../UI/Stepper'
import Form from '../../UI/Form'
import { REGEX } from '../../constants'
import { useSignInMutation } from '../../store/ducks/user/api'

const Login = () => {
	const [signIn, { isLoading, data, error }] = useSignInMutation()
	const router = useRouter()
	const { setToken } = useActions()
	const product = useAppSelector(state => state.product)

	const { handleSubmit, control } = useForm<ILoginData>({
		mode: 'onTouched',
		defaultValues: {
			password: '',
			email: '',
		},
	})

	useEffect(() => {
		if (!data) return

		setToken({ value: data.token })

		if (product) {
			router.push('/checkout')
		} else router.push('/my-subscriptions')
	}, [data])

	const onSubmit: SubmitHandler<ILoginData> = async formData => {
		signIn(formData)
	}

	return (
		<Root>
			<Stepper activeIndex={1} style={{ marginBottom: '64px' }} />
			<Heading>Log in</Heading>
			<LoginForm onSubmit={handleSubmit(onSubmit)} submitError={error}>
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
					Log in
				</Button>
			</LoginForm>
		</Root>
	)
}

export default withNoAuth(Login)

const Root = styled.section``

const LoginForm = styled(Form)`
	margin-top: 32px;
	display: flex;
	flex-direction: column;
	align-items: start;
	gap: 24px;

	& > button {
		margin-top: 24px;
	}
`
