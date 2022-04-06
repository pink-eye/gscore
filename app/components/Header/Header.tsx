import React from 'react'
import styled from 'styled-components'
import useAppSelector from '../../hooks/useAppSelector'
import { useGetMeQuery } from '../../store/ducks/user/api'
import Container from '../UI/Container'
import Popup from '../UI/Popup'
import TextLink from '../UI/TextLink'

const Header = () => {
	const { data } = useGetMeQuery(null)

	return (
		<Root>
			<Container>
				<HeaderContainer>
					<TextLink href="/">
						<img src="/img/logo.svg" alt="The logo of company" />
					</TextLink>
					{data?.username && (
						<HeaderActions>
							<TextLink href="/my-subscriptions">My subscriptions</TextLink>
							<Popup head={data.username} />
						</HeaderActions>
					)}
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

const HeaderActions = styled.div`
	display: flex;
	gap: 32px;
`
