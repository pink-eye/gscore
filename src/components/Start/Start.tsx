import router from 'next/router'
import React, { FC } from 'react'
import styled from 'styled-components'
import withAuth from '../../hocs/withAuth'
import withProduct, { ComponentPropsWithProduct } from '../../hocs/withProduct'
import Button from '../../UI/Button'
import Check from '../../UI/Check'
import Heading from '../../UI/Heading'

const Start: FC<ComponentPropsWithProduct> = ({ product }) => {
	const handleClick = () => router.push('/my-subscriptions')

	return (
		<>
			<Heading>Start your subscription</Heading>
			<StartSubtitle>
				We have sent you a payment receipt by e-mail and a link to download the plugin with a license key.
			</StartSubtitle>
			<Check product={product} hasTotal={false} />
			<Button accent fluid onClick={handleClick}>
				Go to my subscriptions
			</Button>
		</>
	)
}

export default withAuth(withProduct(Start))

const StartSubtitle = styled.p`
	margin-top: 1rem;
	font-weight: 400;
	font-size: 0.9rem;
	line-height: 1.5rem;

	color: #ffffff;
`
