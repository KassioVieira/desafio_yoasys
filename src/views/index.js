import { createSwitchNavigator, createAppContainer } from 'react-navigation'

import Loading from './Loading.js'
import Auth from './auth'
import App from './app'

export default createAppContainer(
	createSwitchNavigator({ Loading, Auth, App }, { initialRouteName: 'Loading' })
)
