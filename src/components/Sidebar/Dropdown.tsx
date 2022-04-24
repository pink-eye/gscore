import React, { FC } from 'react'
import styled from 'styled-components'
import useToggle from '../../hooks/useToggle'

interface Props {
	head: string
}

const Dropdown: FC<Props> = props => {
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
