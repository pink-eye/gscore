import { FC } from 'react'
import styled from 'styled-components'

interface Props {
	currentIndex: number
	numSlides: number
}

const SwiperPagination: FC<Props> = props => {
	return (
		<Root>
			{props.currentIndex}
			<PaginationLength>/{props.numSlides}</PaginationLength>
		</Root>
	)
}

export default SwiperPagination

const Root = styled.div`
	font-weight: 700;
	font-size: 1.375rem;
	line-height: 1.75rem;

	color: #ffffff;
`

const PaginationLength = styled.span`
	opacity: 0.3;
`
