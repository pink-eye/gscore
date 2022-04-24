import React, { useRef } from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import Divider from '../../UI/Divider'
import useActions from '../../hooks/useActions'
import { useGetMeQuery } from '../../store/ducks/user/api'
import Dropdown from './Dropdown'
import useOnClickOutside from '../../hooks/useOnClickOutside'
import useAppSelector from '../../hooks/useAppSelector'

const Sidebar = () => {
	const isOpened = useAppSelector(state => state.sidebar)
	const ref = useRef(null)
	const { toggleSidebar } = useActions()
	useOnClickOutside(ref, () => isOpened && toggleSidebar())
	const { isLoading, data } = useGetMeQuery(null)
	const { clearToken } = useActions()

	if (isLoading) return null

	const logOut = () => clearToken()

	return (
		<Root ref={ref}>
			<div>
				<Button style={{ paddingBlock: '0' }} onClick={toggleSidebar}>
					<img src="/img/close.svg"></img>
				</Button>
			</div>
			{data && (
				<Nav>
					<ul>
						<li>
							<Link href={'/my-subscriptions'}>
								<Button>My subscriptions</Button>
							</Link>
						</li>
						<li>
							<Divider />
							<Dropdown head={data.username}>
								<ul>
									<li>
										<Link href={'/settings'}>
											<Button>
												<aside>
													<img src="/img/settings.svg"></img>
												</aside>
												Settings
											</Button>
										</Link>
									</li>
									<li>
										<Button onClick={logOut}>
											<aside>
												<img src="/img/logout.svg"></img>
											</aside>
											Log out
										</Button>
									</li>
								</ul>
							</Dropdown>
							<Divider />
						</li>
					</ul>
				</Nav>
			)}
		</Root>
	)
}

export default Sidebar

const Root = styled.aside`
	position: absolute;
	z-index: 1;
	top: 0;
	right: 0;
	background-color: #272727;
	height: 100%;
	padding: 24px;
	min-width: 260px;
`
const Nav = styled.nav`
	margin-top: 3rem;
`

const Button = styled.button`
	width: 100%;
	display: flex;
	gap: 10px;
	font-weight: 500;
	font-size: 1rem;
	color: #ffffff;
	padding-block: 20px;
	background-color: transparent;
`
