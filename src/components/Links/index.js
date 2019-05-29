import React from 'react'
import PropTypes from 'prop-types'
import { Linking } from 'react-native'
import {
  Container,
  Link,
  Text,
} from './styles'

export const Links = props => (
  <Container>
    {props.urls.map(item => (
      <Link
        key={item.type}
        activeOpacity={0.8}
        onPress={() => { Linking.openURL(item.url) }}
      >
        <Text>{item.type}</Text>
      </Link>
    ))}
  </Container>
)

Links.propTypes = {
  urls: PropTypes.array.isRequired,
}
