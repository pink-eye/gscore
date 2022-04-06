import React from 'react'
import styled from 'styled-components'
import Container from '../UI/Container'
import Divider from '../UI/Divider'

const Footer = () => {
	return (
		<Root>
			<Container>
				<img src="/img/logo.svg" alt="The logo of company" />
				<FooterDescription>
					Ut enim ad minim veniam quis
					<br /> nostrud exercitation ea commodo
				</FooterDescription>
				<Divider />
			</Container>
		</Root>
	)
}

export default Footer

const Root = styled.footer`
	background-color: #181818;
	width: 100%;
	padding-block: 60px 42px;
`

const FooterDescription = styled.p`
	margin-top: 24px;
	margin-bottom: 0;
	font-size: 18px;
	color: #c7c7c7;
	line-height: calc(30 / 18 * 100%);
`
