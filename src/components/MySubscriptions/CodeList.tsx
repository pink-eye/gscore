import React, { FC, useState, useEffect } from 'react'
import styled from 'styled-components'
import { ICode } from '../../types'
import Code from './Code'
import Button from '../UI/Button'
import useAppDispatch from '../../hooks/useAppDispatch'
import { manageCodes } from '../../store/ducks/code/thunks'

interface Props {
	codes: ICode[]
}

const CodeList: FC<Props> = ({ codes }) => {
	const dispatch = useAppDispatch()
	const [hasSelected, setHasSelected] = useState(false)
	const [selectedCodes, setSelectedCodes] = useState([])

	useEffect(() => {
		if (selectedCodes.length) {
			!hasSelected && setHasSelected(true)
		} else {
			hasSelected && setHasSelected(false)
		}
	}, [selectedCodes])

	const handleSelect = (code: ICode, isSelected: boolean) => {
		if (isSelected) {
			setSelectedCodes([...selectedCodes, code.id])
		} else {
			setSelectedCodes(prevValue => prevValue.filter(item => item !== code.id))
		}
	}

	const handleClick = () => {
		if (!selectedCodes.length) return

		dispatch(manageCodes({ codesIds: selectedCodes, subscribeId: codes[0].subscribeId })).then(data => {
			console.log(data)
		})
	}

	return (
		<Root>
			<List>
				{codes.map((item: ICode) => (
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
