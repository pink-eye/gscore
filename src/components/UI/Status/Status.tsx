import React, { FC } from 'react'
import styled, { css } from 'styled-components'

interface Props {
	status?: string
}

const Status: FC<Props> = ({ status = 'INACTIVE' }) => {
	return <Root $status={status}>{status}</Root>
}

export default Status

interface StyleProps {
	$status: string
}

const Root = styled.span`
	font-weight: 700;
	font-size: 1.375rem;
	line-height: 1.75rem;

	${({ $status }: StyleProps) => {
		switch ($status) {
			case 'HOLD':
				return css`
					color: #ff9e2c;
				`
			case 'ACTIVE':
				return css`
					color: #05c168;
				`
			default:
				return css`
					color: #ff5a65;
				`
		}
	}}
`
