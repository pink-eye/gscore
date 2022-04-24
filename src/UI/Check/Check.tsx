import React, { FC } from 'react'
import styled from 'styled-components'
import { ComponentPropsWithProduct } from '../../hocs/withProduct'
import Divider from '../Divider'

interface Props extends ComponentPropsWithProduct {
	hasTotal?: boolean
}

const Check: FC<Props> = ({ product, hasTotal = true }) => {
	return (
		<>
			<CheckTable>
				<CheckHeader>
					<span>Package name</span>
					<span>Price</span>
				</CheckHeader>
				<Divider />
				<CheckProductInfo>
					<span>{product.sitesCount} Site license</span>
					<span>${product.prices[0].price}</span>
				</CheckProductInfo>
			</CheckTable>
			{hasTotal ? (
				<ChecktTotal>
					<ChecktTotalLabel>Total:</ChecktTotalLabel>
					<ChecktTotalSummary>${product.prices[0].price}</ChecktTotalSummary>
				</ChecktTotal>
			) : (
				<></>
			)}
		</>
	)
}

export default Check

const CheckTable = styled.div`
	background-color: #272727;
	border-radius: 12px;
	padding-block: 16px;
	margin-block: 2rem;
`

const CheckHeader = styled.header`
	background-color: #272727;
	font-weight: 700;
	font-size: 1.5rem;
	line-height: 2.125rem;
	color: #ffffff;
	padding: 32px;
	display: grid;
	grid-template-columns: 3fr 1fr;
`

const CheckProductInfo = styled.div`
	font-size: 1.5rem;
	line-height: 2.125rem;
	color: #ffffff;
	padding: 32px;
	display: grid;
	grid-template-columns: 3fr 1fr;
`

const ChecktTotal = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-top: 1.5rem;
	margin-bottom: 3rem;
`

const ChecktTotalLabel = styled.div`
	font-weight: 700;
	font-size: 1.75rem;
	line-height: 2.5rem;

	color: #ffffff;
`

const ChecktTotalSummary = styled.span`
	font-weight: 700;
	font-size: 1.75rem;
	line-height: 2.5rem;

	color: #ffffff;
`
