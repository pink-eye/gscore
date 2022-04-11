import React, { FC } from 'react'
import styled from 'styled-components'

const Main: FC = props => <Root>{props.children}</Root>

export default Main

const Root = styled.main`
	background-color: #181818;
	padding-block: 32px 100px;
	overflow-x: hidden;
	min-height: 100vh;
`
