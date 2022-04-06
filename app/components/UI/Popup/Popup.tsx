import React, { FC, useState } from 'react'
import styled from 'styled-components'

interface Props {
	head: string
	list?: string[]
}

const Popup: FC<Props> = props => {
	const [isOpened, setIsOpened] = useState(false)

	const handleClick = () => setIsOpened(prevValue => !prevValue)

	return (
		<Root>
			<PopupHead onClick={handleClick}>{props.head} \/</PopupHead>
			{isOpened && <PopupBoard></PopupBoard>}
		</Root>
	)
}

export default Popup

const Root = styled.div`
	position: relative;
	display: flex;
`

const PopupHead = styled.button`
	color: #fff;
	background-color: transparent;
	font-size: 1rem;
`

const PopupBoard = styled.div`
	position: absolute;
	top: calc(100% + 30px);
	right: 0;

	background-color: #272727;
	border-radius: 12px;
	padding: 26px;
`
