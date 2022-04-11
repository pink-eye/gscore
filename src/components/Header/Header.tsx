import dynamic from 'next/dynamic'
import React from 'react'
import styled from 'styled-components'
import useAppSelector from '../../hooks/useAppSelector'
import Container from '../UI/Container'
import TextLink from '../UI/TextLink'
import useMediaQuery from '../../hooks/useMediaQuery'

const HeaderNav = dynamic(() => import('./HeaderNav'))
const Burger = dynamic(() => import('./Burger'))

const Header = () => {
	const token = useAppSelector(state => state.token)
	const matches = useMediaQuery('(min-width: 48rem)')

	return (
		<Root>
			<Container>
				<HeaderContainer>
					<TextLink href="/">
						<img src="/img/logo.svg" alt="The logo of company" />
					</TextLink>
					{token && matches ? <HeaderNav /> : <Burger />}
				</HeaderContainer>
			</Container>
		</Root>
	)
}

export default Header

const Root = styled.header`
	background-color: #181818;
	width: 100%;
	padding-block: 32px;
`

const HeaderContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`
