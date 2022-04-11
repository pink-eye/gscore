import React from 'react'
import styled from 'styled-components'
import useActions from '../../hooks/useActions'

const Burger = () => {
	const { toggleSidebar } = useActions()

	return (
		<Root onClick={toggleSidebar}>
			<img src="/img/burger.svg"></img>
		</Root>
	)
}

export default Burger

const Root = styled.button`
	background-color: transparent;
`
