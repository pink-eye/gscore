import Link from 'next/link'
import React, { AnchorHTMLAttributes, FC } from 'react'
import styled from 'styled-components'

const TextLink: FC<AnchorHTMLAttributes<HTMLAnchorElement>> = ({ href = '/', ...props }) => {
	return (
		<Link href={href}>
			<Root {...props}>{props.children}</Root>
		</Link>
	)
}

export default TextLink

const Root = styled.a`
	position: relative;
	font-weight: 500;
	color: #fc5842;
	font-size: 1.125rem;
	cursor: pointer;
`
