import React, { FC } from 'react'
import styled, { css } from 'styled-components'
import { IProduct } from '../../types'
import Divider from '../UI/Divider'
import Button from '../UI/Button'
import { useRouter } from 'next/router'
import useActions from '../../hooks/useActions'

interface Props extends IProduct {
	accent?: boolean
}

const Card: FC<Props> = ({ accent, ...props }) => {
	const { addProduct } = useActions()
	const router = useRouter()

	const handleClick = () => {
		addProduct(props)
		router.push('/checkout')
	}

	return (
		<Root $accent={accent}>
			<CardPrice>{props.prices[0].price}</CardPrice>
			<CardLicense>{props.sitesCount} Site license</CardLicense>
			<CardDescription>
				Get the advanced WordPress plugin that optimizes content with GSC keywords at one low annual price
			</CardDescription>
			<Divider bg={accent && '#ffffffbe'} />
			<CardFeatureList>
				<CardFeatureItem>All features for {props.sitesCount} sites</CardFeatureItem>
				<CardFeatureItem>Special introductory pricing</CardFeatureItem>
				<CardFeatureItem>Unlimited Pages and Keywords</CardFeatureItem>
				<CardFeatureItem>Billed annually</CardFeatureItem>
			</CardFeatureList>
			<Button onClick={handleClick}>Get Gscore</Button>
		</Root>
	)
}

export default Card

interface StyleProps {
	$accent?: boolean
}

const Root = styled.article`
	border-radius: 12px;
	padding: 42px 48px;
	width: fit-content;
	display: flex;
	flex-direction: column;
	justify-content: center;
	text-align: center;

	${(props: StyleProps) => {
		if (props.$accent) {
			return css`
				background-color: #fc5842;
				transform: translateY(-50px);

				${CardDescription} {
					color: #fff;
				}
			`
		} else {
			return css`
				background-color: #272727;

				${CardDescription} {
					color: #c7c7c7;
				}
			`
		}
	}}

	& > button {
		margin-top: 32px;
	}
`

const CardPrice = styled.h3`
	font-size: 3.375rem;
	font-weight: 700;
	color: #fff;
	line-height: normal;
`

const CardLicense = styled.span`
	font-weight: 700;
	color: #fff;
	font-size: 1.5rem;
	line-height: 1.625rem;
	margin-top: 5px;
`

const CardDescription = styled.p`
	font-weight: 500;
	font-size: 1.125rem;
	line-height: 1.875rem;
	text-align: center;
	max-width: 30ch;
	margin-block: 10px 32px;
`

const CardFeatureList = styled.ul`
	display: flex;
	flex-direction: column;
	gap: 16px;
	text-align: left;
	margin-top: 32px;
`

const CardFeatureItem = styled.li`
	display: flex;
	align-items: center;
	gap: 14px;
	font-weight: 500;
	font-size: 1.125rem;
	color: #fff;
	line-height: 1.25rem;

	&::before {
		content: '';
		display: inline-block;
		width: 26px;
		height: 26px;
		background-color: #fff;
		border-radius: 50%;
	}
`
