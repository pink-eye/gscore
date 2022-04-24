import React, { FC } from 'react'
import styled from 'styled-components'

interface Props {
	level?: string
}

const Heading: FC<Props> = ({ level = '1', children, ...props }) => {
	return React.createElement(`h${level}`, props, children)
}

const StyledHeading = styled(Heading)`
	font-size: clamp(1.75rem, 1.4643rem + 1.4286vw, 2.75rem);
	font-weight: 700;
	color: #ffffff;
	display: inline-block;
`

export default StyledHeading
