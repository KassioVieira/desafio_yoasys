import React, { Component } from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import colors from '../../values/colors'
import { WrapButton, Label } from './styles'

export default class ActionButton extends Component {
	render() {
		const { icon, label, ...rest } = this.props

		return (
			<WrapButton {...rest}>
				{icon && <Icon name={icon} size={24} color={colors.primaryText} />}
				<Label>{label}</Label>
			</WrapButton>
		)
	}
}
