import Styled from 'styled-components/native'
import Colors from '../../statics/colors'

export const Container = Styled.View`
  flex: 1;
  flexDirection: row;
  margin: 16px;
`

export const Link = Styled.TouchableOpacity`
  height: 32px;
  background: ${Colors.SECONDARY};
  borderRadius: 6px;
  alignItems: center;
  justifyContent: center;
  paddingVertical: 4px;
  paddingHorizontal: 8px;
  marginHorizontal: 8px;
`

export const Text = Styled.Text`
  fontSize: 20px;
  fontWeight: 500;
  textAlign: center;
`
