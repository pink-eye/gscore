import React, { FC, useState, ChangeEvent } from 'react'
import styled from 'styled-components'
import useAppDispatch from '../../hooks/useAppDispatch'
import useMediaQuery from '../../hooks/useMediaQuery'
import { activateCode } from '../../store/ducks/code/thunks'
import { ICode } from '../../types'
import Button from '../UI/Button'
import Checkbox from '../UI/Checkbox'
import Status from '../UI/Status'

interface Props extends ICode {
	onSelect: (code: ICode, isSelected: boolean) => void
}

const Code: FC<Props> = ({ onSelect, ...props }) => {
	const matches = useMediaQuery('(min-width: 64rem)')
	const [isLoading, setIsLoading] = useState(false)
	const dispatch = useAppDispatch()

	const handleClick = () => {
		setIsLoading(true)
		dispatch(activateCode({ code: props.code })).then(() => {
			setIsLoading(false)
			location.reload()
		})
	}

	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		onSelect(props, event.target.checked)
	}

	return (
		<Root>
			<Column>
				<ColumnTop>0</ColumnTop>
				<ColumnBottom>
					<Checkbox name={`tick-${props.id}`} onChange={handleChange} />
					{!matches && (
						<>
							<Status status={props.status} />
							{props.status === 'INACTIVE' && (
								<Button isLoading={isLoading} onClick={handleClick}>
									Active
								</Button>
							)}
						</>
					)}
				</ColumnBottom>
			</Column>
			<Column style={{ flex: '1 1 25%' }}>
				<ColumnTop>
					<ColumnLabel>License code</ColumnLabel>
				</ColumnTop>
				<ColumnBottom>
					<ColumnField defaultValue={props.code} disabled></ColumnField>
				</ColumnBottom>
			</Column>
			<Column style={{ flex: '1 1 50%' }}>
				<ColumnTop>
					<ColumnLabel>Domain</ColumnLabel>
				</ColumnTop>
				<ColumnBottom>
					<ColumnExtraContainer>
						<ColumnField disabled></ColumnField>
						{props.status === 'INACTIVE' && matches && (
							<Button isLoading={isLoading} onClick={handleClick}>
								Active
							</Button>
						)}
					</ColumnExtraContainer>
				</ColumnBottom>
			</Column>
			{matches && (
				<Column>
					<ColumnTop>
						<ColumnLabel>Status</ColumnLabel>
					</ColumnTop>
					<ColumnBottom>
						<Status status={props.status} />
					</ColumnBottom>
				</Column>
			)}
		</Root>
	)
}

export default Code

const Root = styled.div`
	background-color: #272727;
	border-radius: 12px;
	gap: 28px;
	display: grid;

	@media screen and (min-width: 64rem) {
		grid-template-columns: auto 4fr 6fr 1fr;
	}

	@media screen and (max-width: 63.9375rem) {
		grid-template-columns: 1fr;
	}

	@media screen and (min-width: 36rem) {
		padding: 2rem;
	}
	@media screen and (max-width: 35.9375rem) {
		padding: 2rem 1rem;
	}
`

const ColumnTop = styled.div``

const ColumnBottom = styled.div`
	align-self: center;
`

const Column = styled.div`
	display: grid;
	grid-template-rows: auto 1fr;
	gap: 12px;

	&:first-child {
		@media screen and (min-width: 64rem) {
			${ColumnTop} {
				opacity: 0;
				visibility: hidden;
			}

			justify-content: center;
		}

		@media screen and (max-width: 63.9375rem) {
			${ColumnTop} {
				display: none;
			}

			${ColumnBottom} {
				display: flex;
				align-items: center;
				gap: 20px;

				& > button {
					margin-left: auto;
				}
			}
		}
	}
`

const ColumnLabel = styled.label`
	font-weight: 700;
	font-size: 1rem;
	line-height: 1.125rem;
	color: #969696;
`

const ColumnField = styled.input`
	border: 0;
	background-color: #393939;
	border-radius: 6px;
	color: #969696;
	padding: 1.5rem;
	width: 100%;
`

const ColumnExtraContainer = styled.div`
	display: flex;
	justify-content: space-between;
	gap: 50px;
	align-items: flex-start;
`
