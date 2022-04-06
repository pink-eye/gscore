import React, { FC } from 'react'
import styled from 'styled-components'
import { IProduct } from '../../types'
import Card from '../Card'
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
						<CardListItem key={item.id}>
							<Card accent={item.id === 2} {...item} />
						</CardListItem>
					))}
			</CardList>
			<HomeBottom>
				<HomeQuestion>Have more than 10 sites?</HomeQuestion>
				<TextLink>Contact us</TextLink>
			</HomeBottom>
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
	margin-top: 100px;
	display: flex;
	gap: 28px;
`

const CardListItem = styled.li``

const HomeBottom = styled.div`
	margin-top: 32px;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 5px;
`

const HomeQuestion = styled.span`
	color: #fff;
	font-weight: 500;
	font-size: 1.125rem;
	line-height: 1.875rem;
`
