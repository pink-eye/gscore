import React, { ButtonHTMLAttributes, FC } from 'react'
import styled, { css, keyframes } from 'styled-components'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
	accent?: boolean
	fluid?: boolean
	isLoading?: boolean
}

const Button: FC<Props> = ({ accent, fluid, isLoading, children, ...props }) => {
	return (
		<Root $accent={accent} $loading={isLoading} $fluid={fluid} {...props}>
			<ButtonContent>{children}</ButtonContent>
		</Root>
	)
}

export default Button

interface StyleProps {
	$accent?: boolean
	$fluid?: boolean
	$loading?: boolean
}

const rotate = keyframes`
	from {
		transform: rotate(0deg);
	}
	to {
		transform: rotate(360deg);
	}
`

const Root = styled.button`
	${(props: StyleProps) => {
		if (!props.$accent) {
			return css`
				color: #fc5842;
				background-color: #fff;

				&:hover {
					color: #dc2b2b;
				}

				&:focus {
					box-shadow: 0 0 0px 4px rgba(255, 255, 255, 0.3);
				}

				&:before {
					background-image: url('/img/loader-accent.svg');
				}
			`
		} else {
			return css`
				color: #fff;
				background-color: #fc5842;

				&:hover {
					background-color: #dc2b2b;
				}

				&:focus {
					box-shadow: 0 0 0px 4px rgba(252, 88, 66, 0.3);
				}

				&:before {
					background-image: url('/img/loader-light.svg');
				}
			`
		}
	}}

	&:before {
		position: absolute;
		z-index: 1;
		width: 100%;
		height: 100%;
		background-repeat: no-repeat;
		background-position: center;
	}

	border-radius: 4px;
	border: 0;
	width: ${({ $fluid }: StyleProps) => $fluid && '100%'};

	display: grid;
	place-items: center;

	@media screen and (min-width: 36rem) {
		padding: 1.625rem 2.625rem;
	}

	@media screen and (max-width: 35.9375rem) {
		padding: 1.25rem 1.5rem;
	}

	${({ $loading }: StyleProps) =>
		$loading &&
		css`
			position: relative;

			${ButtonContent} {
				opacity: 0;
			}

			&:before {
				content: '';
				animation: ${rotate} 0.8s linear infinite;
			}
		`}
`

const ButtonContent = styled.span`
	font-weight: 700;
	font-size: 1rem;
	line-height: normal;
`
