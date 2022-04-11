import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'
import useActions from '../../hooks/useActions'
import { useGetMeQuery } from '../../store/ducks/user/api'
import Popup from '../UI/Popup'

const HeaderNav = () => {
	const { isLoading, data } = useGetMeQuery(null)
	const { clearToken } = useActions()

	if (isLoading) return null

	const logOut = () => clearToken()

	return (
		<Root>
			<Link href={'/my-subscriptions'}>
				<PopupBtn>My subscriptions</PopupBtn>
			</Link>
			<Popup head={data.username}>
				<PopupList>
					<li>
						<Link href={'/settings'}>
							<PopupBtn>
								<aside>
									<img src="/img/settings.svg"></img>
								</aside>
								Settings
							</PopupBtn>
						</Link>
					</li>
					<li>
						<PopupBtn onClick={logOut}>
							<aside>
								<img src="/img/logout.svg"></img>
							</aside>
							Log out
						</PopupBtn>
					</li>
				</PopupList>
			</Popup>
		</Root>
	)
}

export default HeaderNav

const Root = styled.nav`
	display: flex;
	gap: 32px;
`

const PopupList = styled.ul`
	display: flex;
	flex-direction: column;
	gap: 38px;
`

const PopupBtn = styled.button`
	font-weight: 500;
	font-size: 1.25rem;
	line-height: 1.375rem;
	color: #ffffff;
	background-color: transparent;
	display: flex;
	align-items: center;
	gap: 15px;
`
