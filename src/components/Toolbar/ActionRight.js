import React, { Component } from 'react'

import { View } from 'react-native'

import { WrapRight } from './styles'

const ActionRight = ({ FilterComponent, SearchComponent, CartComponent }) => (
	<WrapRight>
		{FilterComponent}
		<View />
		{SearchComponent}
		<View />
		{CartComponent}
	</WrapRight>
)

export default ActionRight
