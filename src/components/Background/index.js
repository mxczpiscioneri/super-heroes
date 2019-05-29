import React from 'react'
import PropTypes from 'prop-types'
import { ImageBackground } from './styles'
import { BackgroundImage } from '../../statics/images'

export const Background = props => (
  <ImageBackground source={BackgroundImage}>
    {props.children}
  </ImageBackground>
)

Background.propTypes = {
  children: PropTypes.any,
}

Background.defaultprops = {
  children: '',
}
