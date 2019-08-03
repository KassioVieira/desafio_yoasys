import styled from 'styled-components/native'
import colors from '../../values/colors'

export const WrapItem = styled.TouchableOpacity`
  flex-direction: row;
  background-color: #fff;
  shadow-color: #000;
  shadow-opacity: 0.25;
  shadow-radius: 3.84;
  elevation: 5;
  padding-vertical: 10;
  padding-horizontal: 16;
`

export const WrapDate = styled.View``

export const Label = styled.Text`
  ${
    props => props.bold && `
      font-weight: bold;
    `
  }
  font-size: 16;
  width: 200
`

export const WrapContent = styled.View`
  margin-left: 20;
`

export const Description = styled.Text`
  font-size: 16;
`