import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import withAuth from '../../hocs/withAuth'
import Heading from '../UI/Heading'
import Personal from './Personal'
import Password from './Password'
import styled from 'styled-components'
import Container from '../UI/Container'

const Settings = () => {
	return (
		<>
			<Heading>Settings</Heading>
			<StyledTabs selectedTabClassName="is-selected" selectedTabPanelClassName="is-selected">
				<StyledTabList>
					<StyledTab>
						<TabBtn>Personal info</TabBtn>
					</StyledTab>
					<StyledTab>
						<TabBtn>Change password</TabBtn>
					</StyledTab>
				</StyledTabList>
				<Container level="min" style={{ marginInline: '0', paddingInline: '0' }}>
					<StyledTabPanel>
						<Personal />
					</StyledTabPanel>
					<StyledTabPanel>
						<Password />
					</StyledTabPanel>
				</Container>
			</StyledTabs>
		</>
	)
}

export default withAuth(Settings)

const StyledTabs = styled(Tabs)`
	margin-top: 3rem;
`

const StyledTabList = styled(TabList)`
	display: flex;
	position: relative;

	&:after {
		content: '';
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 2px;
		background-color: #393939;
	}
`

const StyledTabPanel = styled(TabPanel)`
	&.is-selected {
		display: block;

		@media screen and (min-width: 36rem) {
			padding-top: 3rem;
		}

		@media screen and (max-width: 35.9375rem) {
			padding-top: 2rem;
		}
	}

	&:not(.is-selected) {
		display: none;
	}
`

const StyledTab = styled(Tab)`
	&.is-selected {
		color: #fc5842;
		position: relative;
		&:after {
			content: '';
			position: absolute;
			z-index: 1;
			bottom: 0;
			left: 0;
			width: 100%;
			height: 2px;
			background-color: #fc5842;
		}
	}

	&:not(.is-selected) {
		color: #393939;
	}
`

const TabBtn = styled.button`
	padding: 12px;
	font-weight: 700;

	font-size: 1.125rem;
	line-height: 1.25rem;
	background-color: transparent;
	color: inherit;
`
