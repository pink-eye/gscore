import React, { FC } from 'react'
import styled from 'styled-components'

interface Props {
	activeIndex: number
	style?: React.CSSProperties
}

const Stepper: FC<Props> = props => {
	const steps = ['Create account', 'Log in', 'Checkout']

	return (
		<Root style={props.style}>
			{steps.map((item, index) => (
				<StepperItem key={index} $active={props.activeIndex >= index} $numberSteps={steps.length}>
					{item}
				</StepperItem>
			))}
		</Root>
	)
}

export default Stepper

const Root = styled.ol`
	display: flex;
	gap: 1rem;
	list-style-type: none;

	@media screen and (max-width: 47.9375rem) {
		flex-direction: column;
	}
`

interface StyleProps {
	$active: boolean
	$numberSteps: number
}

const StepperItem = styled.li`
	flex: ${({ $numberSteps }: StyleProps) => `1 1 calc(100% / ${$numberSteps})`};
	font-weight: 500;
	font-size: 1.25rem;
	line-height: 1.375rem;
	color: #ffffff;
	display: flex;
	gap: 10px;

	&:after {
		content: '';
		height: 8px;
		border-radius: 6px;

		background-color: ${({ $active }: StyleProps) => ($active ? '#FC5842' : '#393939')};

		@media screen and (min-width: 48rem) {
			width: 100%;
		}

		@media screen and (max-width: 47.9375rem) {
			width: 8px;
		}
	}

	@media screen and (min-width: 48rem) {
		flex-direction: column;
	}
	@media screen and (max-width: 47.9375rem) {
		flex-direction: row-reverse;
		align-items: center;
		justify-content: flex-end;
	}
`
