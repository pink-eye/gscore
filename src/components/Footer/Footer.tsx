import React from 'react'
import styled from 'styled-components'
import Container from '../../UI/Container'
import Divider from '../../UI/Divider'

const Footer = () => {
	return (
		<Root>
			<Container>
				<img src="/img/logo.svg" alt="The logo of company" />
				<Description>
					Ut enim ad minim veniam quis
					<br /> nostrud exercitation ea commodo
				</Description>
				<Divider />
				<Bottom>
					Copyright © 2022 GScore | All Rights Reserved | Cookies | Privacy Policy
					<ContactList>
						<li>
							<a href="https://facebook.com">
								<img src="img/facebook.svg" alt="facebook" />
							</a>
						</li>
						<li>
							<a href="https://twitter.com">
								<img src="img/twitter.svg" alt="twitter" />
							</a>
						</li>
						<li>
							<a href="https://linkedin.com">
								<img src="img/linkedin.svg" alt="linkedin" />
							</a>
						</li>
					</ContactList>
				</Bottom>
			</Container>
		</Root>
	)
}

export default Footer

const Root = styled.footer`
	background-color: #181818;
	width: 100%;
	padding-block: 3.75rem 2.625rem;
`

const Description = styled.p`
	margin-block: 1.5rem 3rem;
	font-size: 1.125rem;
	color: #c7c7c7;
	line-height: 1.875rem;
`

const Bottom = styled.div`
	margin-top: 3rem;
	font-size: 1.125rem;
	color: #c7c7c7;
	line-height: 1.875rem;
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 2rem;

	@media screen and (max-width: 56.25rem) {
		flex-direction: column;
		text-align: center;
	}
`

const ContactList = styled.ul`
	display: flex;
	align-items: center;
	gap: 2rem;
`
