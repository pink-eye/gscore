import React, { FC, useState } from 'react'
import styled from 'styled-components'

import { Swiper, SwiperSlide } from 'swiper/react'
import { A11y, Swiper as ISwiper } from 'swiper'
import Subscription from './Subscription'
import { SwiperBtnNext, SwiperBtnPrev } from './SwiperBtn'
import SwiperPagination from './SwiperPagination'
import { ISubscription } from '../../types'

interface Props {
	subscriptions: ISubscription[]
	currentIndex: number
	onSlideChange: (swiper: ISwiper) => void
}

const SubscriptionList: FC<Props> = ({ subscriptions, currentIndex, onSlideChange }) => {
	const [numSlides, setNumSlides] = useState(0)

	const hasMoreThanOne = subscriptions.length > 1

	return (
		<StyledSwiper
			modules={[A11y]}
			spaceBetween={28}
			slidesPerView={1}
			onSwiper={swiper => setNumSlides(swiper.slides.length)}
			onSlideChange={onSlideChange}>
			{subscriptions.map(item => (
				<SwiperSlide key={item.id}>
					{({ isActive }) => <Subscription {...item} isActive={isActive} />}
				</SwiperSlide>
			))}
			{hasMoreThanOne && (
				<SwiperActions>
					<SwiperBtnPrev isDisabled={currentIndex === 1}>Prev</SwiperBtnPrev>
					<SwiperPagination currentIndex={currentIndex} numSlides={numSlides} />
					<SwiperBtnNext isDisabled={currentIndex === numSlides}>Next</SwiperBtnNext>
				</SwiperActions>
			)}
		</StyledSwiper>
	)
}

export default SubscriptionList

const StyledSwiper = styled(Swiper)`
	margin-top: 3rem;
	overflow: visible;
	margin-inline: auto;
	position: relative;
	list-style: none;
	padding: 0;
	z-index: 1;

	.swiper-pointer-events {
		touch-action: pan-y;
	}

	.swiper-wrapper {
		position: relative;
		width: 100%;
		height: 100%;
		z-index: 1;
		display: flex;
		transition-property: transform;
		box-sizing: content-box;
	}

	.swiper-backface-hidden .swiper-slide {
		transform: translateZ(0);
		-webkit-backface-visibility: hidden;
		backface-visibility: hidden;
	}

	.swiper-slide {
		flex-shrink: 0;
		width: 100%;
		height: 100%;
		position: relative;
		transition-property: transform;
	}
`

const SwiperActions = styled.div`
	margin-top: 1.5rem;
	display: flex;
	align-items: center;
	gap: 12px;

	@media screen and (max-width: 47.9375rem) {
		justify-content: center;
	}
`
