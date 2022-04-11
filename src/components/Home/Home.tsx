import React, { FC } from 'react'
import styled from 'styled-components'
import { IProduct } from '../../types'
import Card from './Card'
import Heading from '../UI/Heading'
import TextLink from '../UI/TextLink'

interface Props {
	products: IProduct[]
}

const Home: FC<Props> = props => {
	return (
		<Root>
			<Heading>Get started with Gscore today!</Heading>
			<CardList>
				{props.products &&
					props.products.map(item => (
						<li key={item.id}>
							<Card accent={item.id === 2} {...item} />
						</li>
					))}
			</CardList>
			<Bottom>
				<Question>Have more than 10 sites?</Question>
				<TextLink>Contact us</TextLink>
			</Bottom>
		</Root>
	)
}

export default Home

const Root = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`

const CardList = styled.ul`
	display: flex;
	gap: 28px;

	@media screen and (max-width: 81.25rem) {
		flex-direction: column;
	}

	@media screen and (min-width: 48rem) {
		margin-top: 100px;
	}

	@media screen and (max-width: 47.9375rem) {
		margin-top: 2rem;
	}
`

const Bottom = styled.div`
	margin-top: 32px;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 5px;
`

const Question = styled.span`
	color: #fff;
	font-weight: 500;
	font-size: 1.125rem;
	line-height: 1.875rem;
`
