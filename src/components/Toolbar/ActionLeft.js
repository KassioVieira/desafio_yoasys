import React, { Component } from 'react'

import { View } from 'react-native'

import { WrapRight } from './styles'

const ActionLeft = ({ MenuComponent }) => (
	<WrapRight>
		{MenuComponent}
	</WrapRight>
)

export default ActionLeft
