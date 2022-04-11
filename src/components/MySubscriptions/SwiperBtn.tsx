import { FC } from 'react'
import styled from 'styled-components'
import { useSwiper } from 'swiper/react'

interface Props {
	isDisabled?: boolean
}

const SwiperBtnPrev: FC<Props> = ({ isDisabled }) => {
	const swiper = useSwiper()

	return (
		<Root disabled={isDisabled} $isRotated={true} onClick={() => swiper.slidePrev()}>
			<BtnIcon src="/img/swiper-btn-arrow.svg"></BtnIcon>
		</Root>
	)
}

const SwiperBtnNext: FC<Props> = ({ isDisabled }) => {
	const swiper = useSwiper()

	return (
		<Root disabled={isDisabled} onClick={() => swiper.slideNext()}>
			<BtnIcon src="/img/swiper-btn-arrow.svg"></BtnIcon>
		</Root>
	)
}

export { SwiperBtnPrev, SwiperBtnNext }

interface StyleProps {
	$isRotated?: boolean
}

const Root = styled.button`
	@media screen and (min-width: 48rem) {
		border: 1px solid #969696;
		border-radius: 12px;
		padding: 10px;
		background-color: transparent;
		transform: ${({ $isRotated }: StyleProps) => $isRotated && 'scale(-1)'};

		&:disabled {
			opacity: 0.3;
			cursor: not-allowed;
		}
	}

	@media screen and (max-width: 47.9375rem) {
		display: none;
	}
`

const BtnIcon = styled.img`
	display: block;
`
