import styled from 'styled-components/native'

import colors from '../../values/colors'

export const WrapToolbar = styled.View`
	flex-direction: row;
	justify-content: space-between;
	background: ${colors.primary};
	height: 56;
	width: 100%;
`
export const WrapTitle = styled.View`
	position: absolute;
	left: 0;
	right: 0;
	bottom: 0;
	top: 0;
	align-items: center;
	justify-content: center;
`
export const Title = styled.Text`
	font-size: 16;
	text-align: center;
	color: ${colors.secondary};
	font-weight: 500;
`
export const WrapButton = styled.TouchableOpacity`
	flex-direction: row;
	align-items: center;
	justify-content: center;
	padding-horizontal: 16;
`
export const Label = styled.Text`
	color: ${colors.secondary};
	margin-left: 4;
`
