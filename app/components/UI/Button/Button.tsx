import React, { ButtonHTMLAttributes, FC } from 'react'
import styled from 'styled-components'

const Button: FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({ children, ...props }) => (
	<Root {...props}>{children}</Root>
)

export default Button

const Root = styled.button`
	border-radius: 6px;
	color: #fc5842;
	background-color: #fff;
	font-weight: 700;
	font-size: 1rem;
	line-height: normal;
	border: 0;
	padding: 1.5rem;
`
