import React, { Component } from 'react'
import { View } from 'react-native'

import { WrapToolbar, WrapTitle, Title } from './styles'

export default class Toolbar extends Component {
	render() {
		const { title, RightComponent, LeftComponent, ...rest } = this.props
		return (
			<WrapToolbar {...rest}>
				<WrapTitle>
					<Title>{title}</Title>
				</WrapTitle>
				{LeftComponent}
				<View />
				{RightComponent}
			</WrapToolbar>
		)
	}
}
