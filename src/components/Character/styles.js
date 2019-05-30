import Styled from 'styled-components/native'
import Colors from '../../statics/colors'

export const Container = Styled.View`
  flex: 1;
`

export const Box = Styled.TouchableOpacity`
  flexBasis: 0;
  flexGrow: 1;
  borderRadius: 6;
  background: ${Colors.PRIMARY};
  opacity: 0.8;
  padding: 8px;
  margin: 8px;
`

export const Image = Styled.Image`
  borderRadius: 6;
  height: 200px;
`

export const Legend = Styled.Text`
  color: ${Colors.WHITE};
  fontSize: 20px;
  paddingHorizontal: 8px;
  marginTop: 16px;
  marginBottom: 8px;
`

export const FavoriteBox = Styled.View`
  position: absolute;
  top: 16px;
  right: 16px;  
`
