import Styled from 'styled-components/native'
import Colors from '../../statics/colors'

export const Container = Styled.View`
  flex: 1;
  background: ${Colors.PRIMARY};
  opacity: 0.9;
  marginBottom: 16px;
`

export const Title = Styled.Text`
  color: ${Colors.WHITE};
  fontSize: 24px;
  fontWeight: bold;
  marginVertical: 8px;
  paddingHorizontal: 16px;
`

export const Box = Styled.View`
  padding: 8px;
`

export const Image = Styled.Image`
  borderRadius: 6px;
  width: 150px;
  height: 225px;
`

export const Legend = Styled.Text`
  color: ${Colors.WHITE};
  fontSize: 16px;
  marginTop: 8px;
`
