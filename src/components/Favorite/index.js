import React from 'react'
import PropTypes from 'prop-types'
import {
  Icon,
  Image,
} from './styles'
import {
  IconFavorite,
  IconFavoriteBorder,
} from '../../statics/images'

export const Favorite = props => {
  const { character, favoritesIds, setFavorite } = props
  const isFavorite = favoritesIds.indexOf(character.id) >= 0

  return (
    <Icon activeOpacity={0.6} onPress={() => setFavorite(character)}>
      <Image source={isFavorite ? IconFavorite : IconFavoriteBorder} />
    </Icon>
  )
}

Favorite.propTypes = {
  character: PropTypes.object.isRequired,
  favoritesIds: PropTypes.array.isRequired,
  setFavorite: PropTypes.func.isRequired,
}
