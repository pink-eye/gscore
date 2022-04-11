import React, { FC } from 'react'
import styled from 'styled-components'
import { ISubscription } from '../../types'
import makeFriendlyDate from '../../utils/makeFriendlyDate'
import Button from '../UI/Button'
import Divider from '../UI/Divider'
import Status from '../UI/Status'

interface Props extends ISubscription {
	isActive?: boolean
}

const Subscription: FC<Props> = ({ isActive, ...props }) => {
	return (
		<Root $active={isActive}>
			<Header>
				Gscore
				<Status status={props.status} />
			</Header>
			<Divider bg="#969696" />
			<Info>
				<InfoContainer>
					<SiteCount>{props.product.sitesCount} site license</SiteCount>
					<Price>${props.product.prices[0].price}</Price>
				</InfoContainer>
				<Date>valid until {makeFriendlyDate(+props.currentPeriodEnd)}</Date>
				<Button style={{ marginTop: '20px' }}>View</Button>
			</Info>
		</Root>
	)
}

export default Subscription

interface StyleProps {
	$active: boolean
}

const Root = styled.article`
	background: #393939;
	border-radius: 12px;
	opacity: ${({ $active }: StyleProps) => ($active ? '1' : '.5')};

	@media screen and (min-width: 36rem) {
		padding-block: 3rem;
	}

	@media screen and (max-width: 35.9375rem) {
		padding-block: 2rem;
	}
`

const Header = styled.header`
	display: flex;
	justify-content: space-between;
	align-items: center;
	font-weight: 700;
	font-size: 1.375rem;
	line-height: 1.75rem;
	color: #ffffff;

	@media screen and (min-width: 36rem) {
		padding-inline: 2rem;
		margin-bottom: 2rem;
	}

	@media screen and (max-width: 35.9375rem) {
		padding-inline: 1rem;
		margin-bottom: 1.5rem;
	}
`

const Info = styled.main`
	display: flex;
	flex-direction: column;
	gap: 12px;

	@media screen and (min-width: 36rem) {
		padding-inline: 2rem;
		margin-top: 2rem;
	}

	@media screen and (max-width: 35.9375rem) {
		padding-inline: 1rem;
		margin-top: 1.5rem;
	}
`

const InfoContainer = styled.div`
	display: flex;
	gap: 10px;

	@media screen and (min-width: 26.5625rem) {
		justify-content: space-between;
		align-items: center;
	}
	@media screen and (max-width: 26.5rem) {
		flex-direction: column-reverse;
	}
`

const SiteCount = styled.p`
	font-weight: 500;
	font-size: 1.5rem;
	line-height: 1.625rem;
	color: #ffffff;
`

const Price = styled.span`
	font-weight: 500;
	font-size: 1.5rem;
	color: #ffffff;
`

const Date = styled.time`
	font-weight: 500;
	font-size: 1rem;
	color: #969696;
`
