import React from 'react'
import PropTypes from 'prop-types'
import {
  Container,
  Box,
  Image,
  Legend,
} from './styles'

export const Character = props => {
  const {
    character,
    image,
    onPress,
    legend,
  } = props

  return (
    <Container>
      <Box
        activeOpacity={0.9}
        onPress={onPress}
      >
        <Image source={{ uri: image }} />
        {legend &&
          <Legend>{character.name}</Legend>
        }
      </Box>
    </Container>
  )
}

Character.propTypes = {
  character: PropTypes.object.isRequired,
  image: PropTypes.string.isRequired,
  onPress: PropTypes.func,
  legend: PropTypes.bool,
}

Character.defaultprops = {
  onPress: null,
  legend: '',
}
