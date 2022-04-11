import React, { FormHTMLAttributes, FC } from 'react'
import styled from 'styled-components'

interface Props extends FormHTMLAttributes<HTMLFormElement> {
	submitError: string
}

const Form: FC<Props> = ({ submitError, children, ...props }) => {
	return (
		<form {...props}>
			{children}
			{submitError?.length && <FormError>{submitError}</FormError>}
		</form>
	)
}

export default Form

const FormError = styled.output`
	margin-top: 10px;
	color: #ff5a65;
	font-size: 1rem;
`
