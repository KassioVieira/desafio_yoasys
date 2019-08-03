import styled from 'styled-components/native'
import colors from '../../values/colors'

export const WrapButton = styled.TouchableOpacity`
  align-self: center;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 20;
  width: 90%;
  height: 50;
  background-color: ${colors.primary};
  border-radius: 3.15;
`

export const Label = styled.Text`
  color: ${colors.secondary};
  font-size: 16;
`