import React, { FC, useState, useEffect } from 'react'
import styled from 'styled-components'
import { ICode } from '../../types'
import Code from './Code'
import Button from '../../UI/Button'
import useToggle from '../../hooks/useToggle'
import { useGetCodesQuery } from '../../store/ducks/code/api'
import Preloader from '../../UI/Preloader'

interface Props {
	subscribeId: number
}

const CodeList: FC<Props> = ({ subscribeId }) => {
	const { isLoading, data } = useGetCodesQuery(null)
	const [hasSelected, toggle] = useToggle(false)
	const [selectedCodes, setSelectedCodes] = useState<Array<number>>([])

	useEffect(() => {
		if (selectedCodes.length) {
			!hasSelected && toggle()
		} else {
			hasSelected && toggle()
		}
	}, [selectedCodes])

	if (isLoading) return <Preloader />

	const handleSelect = (code: ICode, isSelected: boolean) => {
		if (isSelected) {
			setSelectedCodes([...selectedCodes, code.id])
		} else {
			setSelectedCodes(prevValue => prevValue.filter(item => item !== code.id))
		}
	}

	const handleClick = () => {
		if (!selectedCodes.length) return
	}

	const filteredData = data.filter((item: ICode) => item.subscribeId === subscribeId)

	return (
		<Root>
			<List>
				{filteredData.map((item: ICode) => (
					<li key={item.id}>
						<Code {...item} onSelect={handleSelect} />
					</li>
				))}
			</List>
			{hasSelected && (
				<Confirm>
					Select the domains you want to keep
					<Button accent onClick={handleClick}>
						Confirm
					</Button>
				</Confirm>
			)}
		</Root>
	)
}

export default CodeList

const Root = styled.div`
	margin-top: 2rem;
`

const List = styled.ul`
	display: flex;
	flex-direction: column;
	gap: 20px;
`

const Confirm = styled.div`
	margin-top: 3rem;
	display: flex;
	justify-content: space-between;
	gap: 20px;
	align-items: center;
	font-weight: 700;
	font-size: 1.25rem;
	color: #ffffff;

	@media screen and (max-width: 26.5rem) {
		flex-direction: column;

		& > button {
			width: 100%;
		}
	}
`
