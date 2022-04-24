import React, { useState } from 'react'
import styled from 'styled-components'
import Heading from '../../UI/Heading'
import Container from '../../UI/Container'
import withAuth from '../../hocs/withAuth'
import Preloader from '../../UI/Preloader'
import { useGetSelfSubscribesQuery } from '../../store/ducks/user/api'
import { Swiper as ISwiper } from 'swiper'
import Button from '../../UI/Button'
import { useRouter } from 'next/router'
import dynamic from 'next/dynamic'

const SubscriptionList = dynamic(() => import('./SubscriptionList'))
const CodeList = dynamic(() => import('./CodeList'))

const MySubscriptions = () => {
	const { isLoading, data } = useGetSelfSubscribesQuery(null)
	const [currentIndex, setCurrentIndex] = useState(1)
	const router = useRouter()

	if (isLoading) return <Preloader />

	const handleClickUpgrade = () => router.push('/')

	const handleSlideChange = (swiper: ISwiper) => {
		setCurrentIndex(swiper.activeIndex + 1)
	}

	return (
		<>
			<TitleContainer>
				<Heading>My subscriptions</Heading>
				<Button accent onClick={handleClickUpgrade}>
					Upgrade
				</Button>
			</TitleContainer>
			{data.length && (
				<>
					<Container level="min" style={{ marginInline: '0', paddingLeft: '0', paddingRight: '30px' }}>
						<SubscriptionList
							subscriptions={data}
							currentIndex={currentIndex}
							onSlideChange={handleSlideChange}
						/>
					</Container>
					<CodeList subscribeId={data[currentIndex - 1].id} />
				</>
			)}
		</>
	)
}

export default withAuth(MySubscriptions)

const TitleContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 20px;

	@media screen and (max-width: 26.5rem) {
		flex-direction: column;

		& > button {
			width: 100%;
		}
	}
`
