import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import withAuth from '../../hocs/withAuth'
import Heading from '../UI/Heading'
import 'react-tabs/style/react-tabs.css'
import Personal from './Personal'
import Password from './Password'

const Settings = () => {
	return (
		<>
			<Heading>Settings</Heading>
			<Tabs>
				<TabList>
					<Tab>Personal info</Tab>
					<Tab>Change password</Tab>
				</TabList>
				<TabPanel>
					<Personal />
				</TabPanel>
				<TabPanel>
					<Password />
				</TabPanel>
			</Tabs>
		</>
	)
}

export default withAuth(Settings)
