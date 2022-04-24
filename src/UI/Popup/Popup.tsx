import React, { FC } from 'react'
import styled from 'styled-components'
import useToggle from '../../hooks/useToggle'

interface Props {
	head: string
	list?: string[]
}

const Popup: FC<Props> = props => {
	const [isOpened, toggle] = useToggle(false)

	const handleClick = () => toggle()

	return (
		<Root>
			<Head $isOpened={isOpened} onClick={handleClick}>
				{props.head}
				<img src="/img/popup-arrow.svg"></img>
			</Head>
			{isOpened && <Board>{props.children}</Board>}
		</Root>
	)
}

export default Popup

const Root = styled.div`
	position: relative;
	display: flex;
`

interface StyleProps {
	$isOpened: boolean
}

const Head = styled.button`
	color: #fff;
	background-color: transparent;
	font-weight: 500;
	font-size: 1.25rem;
	line-height: 1.375rem;
	display: flex;
	align-items: center;
	gap: 8px;

	& > img {
		transform: ${(props: StyleProps) => props.$isOpened && 'scale(-1)'};
	}
`

const Board = styled.div`
	position: absolute;
	top: calc(100% + 30px);
	right: 0;
	z-index: 2;
	width: max-content;
	background-color: #272727;
	border-radius: 12px;
	padding: 26px;
`
