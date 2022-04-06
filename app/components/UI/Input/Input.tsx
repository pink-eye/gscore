import React, { FC, InputHTMLAttributes } from 'react'
import { FieldError } from 'react-hook-form'
import styled, { css } from 'styled-components'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
	error?: FieldError | undefined
}

const Input: FC<Props> = ({ error, ...props }) => {
	return (
		<Root>
			<InputField $isValid={!error} {...props} />
			{error && <Error>{error.message}</Error>}
		</Root>
	)
}

export default Input

interface StyleProps {
	$isValid: boolean
}

const Root = styled.div`
	display: flex;
	flex-direction: column;
	gap: 2px;
	width: 100%;
`

const InputField = styled.input`
	${(props: StyleProps) => {
		if (props.$isValid) {
			return css`
				border: 1px solid #d7d7d7;
			`
		} else {
			return css`
				border: 1px solid #ff5a65;
			`
		}
	}}

	border-radius: 6px;
	background-color: #fff;
	color: #393939;
	padding: 25px 23px;
	width: 100%;
	font-size: 1rem;
`

const Error = styled.output`
	color: #ff5a65;
`
