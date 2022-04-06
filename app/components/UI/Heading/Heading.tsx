import React, { FC } from 'react'
import styled from 'styled-components'

interface Props {
	level?: string
}

const Heading: FC<Props> = ({ level = '1', children, ...props }) => {
	return React.createElement(`h${level}`, props, children)
}

const StyledHeading = styled(Heading)`
	font-size: 44px;
	font-weight: 700;
	line-height: calc(54 / 44 * 100%);
	color: #ffffff;
`

export default StyledHeading
