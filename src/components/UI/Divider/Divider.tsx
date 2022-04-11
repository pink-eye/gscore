import React, { FC } from 'react'
import styled from 'styled-components'

interface Props {
	bg?: string | false | undefined
}

const Divider: FC<Props> = ({ bg }) => <Root $bg={bg} />

export default Divider

interface StyleProps {
	$bg?: string | false
}

const Root = styled.small`
	display: block;
	width: 100%;
	height: 1px;
	background-color: ${({ $bg }: StyleProps) => ($bg ? $bg : '#393939')};
`
