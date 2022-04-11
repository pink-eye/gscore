import React, { FC, InputHTMLAttributes } from 'react'
import styled from 'styled-components'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
	name: string
}

const Checkbox: FC<Props> = ({ ...props }) => {
	return (
		<Root>
			<CheckboxTick type="checkbox" {...props} id={props.name}></CheckboxTick>
			<CheckboxLabel htmlFor={props.name}></CheckboxLabel>
		</Root>
	)
}

export default Checkbox

const Root = styled.div``

const CheckboxLabel = styled.label`
	cursor: pointer;

	&:before {
		content: '';
		display: block;
		width: 28px;
		height: 28px;
		border-radius: 7px;
	}
`

const CheckboxTick = styled.input`
	position: absolute;
	left: 0;
	opacity: 0;

	&:checked + ${CheckboxLabel}:before {
		background-color: #fc5842;
		background-image: url('/img/tick-light.svg');
		background-repeat: no-repeat;
		background-position: center;
	}

	&:not(:checked) + ${CheckboxLabel}:before {
		background-color: #c7c7c7;
	}
`
