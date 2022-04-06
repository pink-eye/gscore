import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import withAuth from '../../hocs/withAuth'
import Button from '../UI/Button'
import Heading from '../UI/Heading'
import Input from '../UI/Input'
import 'react-tabs/style/react-tabs.css'

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
					<h2>Any content 1</h2>
					<Input placeholder="Username" />
					<Input placeholder="Email" />
					<Button>Save</Button>
				</TabPanel>
				<TabPanel>
					<h2>Any content 2</h2>
					<Input placeholder="Current password" />
					<Input placeholder="New password" />
					<Button>Save</Button>
				</TabPanel>
			</Tabs>
		</>
	)
}

export default withAuth(Settings)
