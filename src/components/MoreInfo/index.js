import React from 'react'
import PropTypes from 'prop-types'
import Carousel from 'react-native-snap-carousel'
import { Dimensions } from 'react-native'
import { generateUrlImage } from '../../utils'
import {
  Container,
  Title,
  Box,
  Image,
  Legend,
} from './styles'

const { width } = Dimensions.get('window')

export const MoreInfo = props => (
  <Container>
    <Title>{props.title}</Title>

    <Carousel
      data={props.data}
      sliderWidth={width}
      itemWidth={166}
      renderItem={({ item }) => (
        <Box key={item.id}>
          {item.thumbnail &&
            <Image source={{ uri: generateUrlImage(item.thumbnail.path, item.thumbnail.extension, 'portrait_xlarge') }} />
          }
          <Legend>{item.title}</Legend>
        </Box>
      )}
    />
  </Container>
)

MoreInfo.propTypes = {
  title: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired,
}
