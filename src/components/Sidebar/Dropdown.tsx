import React, { FC, useState } from 'react'
import styled from 'styled-components'

interface Props {
	head: string
}

const Dropdown: FC<Props> = props => {
	const [isOpened, setIsOpened] = useState(false)

	const handleClick = () => setIsOpened(prevValue => !prevValue)

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

export default Dropdown

interface StyleProps {
	$isOpened: boolean
}

const Root = styled.div``

const Head = styled.button`
	display: flex;
	width: 100%;
	align-items: center;
	justify-content: space-between;
	font-weight: 500;
	font-size: 1rem;
	color: #ffffff;
	padding-block: 20px;
	background-color: transparent;

	& > img {
		transform: ${(props: StyleProps) => props.$isOpened && 'scale(-1)'};
	}
`

const Board = styled.div``
