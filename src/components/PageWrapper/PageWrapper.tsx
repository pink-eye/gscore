import React, { FC } from 'react'
import Footer from '../Footer'
import Header from '../Header'
import styled from 'styled-components'
import Main from '../Main'
import Divider from '../UI/Divider'
import useMediaQuery from '../../hooks/useMediaQuery'
import dynamic from 'next/dynamic'
import useAppSelector from '../../hooks/useAppSelector'

const Sidebar = dynamic(() => import('../Sidebar'))

const PageWrapper: FC = props => {
	const isOpened = useAppSelector(state => state.sidebar)
	const matches = useMediaQuery('(max-width: 47.9375rem)')

	return (
		<Root>
			<Header />
			<Main>{props.children}</Main>
			<Divider />
			<Footer />
			{matches && isOpened && <Sidebar />}
		</Root>
	)
}

export default PageWrapper

const Root = styled.div`
	position: relative;
	height: 100%;
`
