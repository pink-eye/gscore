import React from 'react'
import styled, { keyframes } from 'styled-components'

const Preloader = () => {
	return (
		<Root>
			<img src="/img/loader-accent.svg" alt="The page is loading..." />
		</Root>
	)
}

export default Preloader

const rotate = keyframes`
	from {
		transform: rotate(0deg) scale(3);
	}
	to {
		transform: rotate(360deg) scale(3);
	}
`

const Root = styled.div`
	width: 100%;
	padding-block: 48px;
	background-color: #181818;
	display: grid;
	place-items: center;

	& > img {
		animation: ${rotate} 0.8s linear infinite;
	}
`
