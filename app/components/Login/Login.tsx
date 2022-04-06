import { useRouter } from 'next/router'
import React from 'react'
import { SubmitHandler, useForm, Controller } from 'react-hook-form'
import styled from 'styled-components'
import useActions from '../../hooks/useActions'
import useAppDispatch from '../../hooks/useAppDispatch'
import useAppSelector from '../../hooks/useAppSelector'
import { signIn } from '../../store/ducks/user/thunks'
import { IFormValuesLogin } from '../../types'
import Button from '../UI/Button'
import Heading from '../UI/Heading'
import Input from '../UI/Input'

const Login = () => {
	const router = useRouter()
	const { setToken } = useActions()
	const dispatch = useAppDispatch()
	const { isLoading, error } = useAppSelector(state => state.user)

	const { handleSubmit, control } = useForm<IFormValuesLogin>({
		mode: 'onTouched',
	})

	const onSubmit: SubmitHandler<IFormValuesLogin> = async formData => {
		const userAction = await dispatch(signIn(formData))
		const { token } = userAction.payload
		setToken(token)
		router.push('/')
	}

	const regexEmail =
		/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i

	return (
		<Root>
			<Heading>Log in {isLoading && <span>Loading...</span>}</Heading>
			<LoginForm onSubmit={handleSubmit(onSubmit)}>
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
				<Button type="submit">Log in</Button>
				{error && <span>error</span>}
			</LoginForm>
		</Root>
	)
}

export default Login

const Root = styled.section``

const LoginForm = styled.form`
	margin-top: 32px;
	display: flex;
	flex-direction: column;
	align-items: start;
	gap: 24px;

	& > button {
		margin-top: 24px;
	}
`
