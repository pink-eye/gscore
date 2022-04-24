import React, { FC } from 'react'
import styled, { css } from 'styled-components'

interface Props {
	level?: string
	style?: React.CSSProperties
}

const Container: FC<Props> = ({ level = 'max', style, ...props }) => (
	<Root $level={level} style={style}>
		{props.children}
	</Root>
)

export default Container

interface StyleProps {
	$level?: string
}

const Root = styled.div`
	padding-inline: 15px;
	margin-inline: auto;

	${(props: StyleProps) => {
		switch (props.$level) {
			case 'min':
				return css`
					width: min(650px, 100%);
				`
			case 'max':
			default:
				return css`
					width: min(1300px, 100%);
				`
		}
	}}
`
