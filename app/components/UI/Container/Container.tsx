import React, { FC } from 'react'
import styled, { css } from 'styled-components'

interface Props {
	level?: string
}

const Container: FC<Props> = ({ level = 'max', ...props }) => <Root $level={level}>{props.children}</Root>

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
					width: min(620px, 100%);
				`
			case 'max':
			default:
				return css`
					width: min(1270px, 100%);
				`
		}
	}}
`
