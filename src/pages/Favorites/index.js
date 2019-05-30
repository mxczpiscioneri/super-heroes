import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { FlatList } from 'react-native'
import FavoriteContext from '../../components/Favorite/context'
import { generateUrlImage } from '../../utils'
import { Background, Character } from '../../components'
import { ListEmpty } from './styles'

class Favorites extends Component {
  static navigationOptions = {
    title: 'Favorites',
  }

  render() {
    const { navigate } = this.props.navigation

    return (
      <Background>
        <FavoriteContext.Consumer>
          {context => (
            <FlatList
              data={Array.isArray(context.favorites) ? context.favorites : []}
              keyExtractor={item => `favorites${item.id}`}
              numColumns={2}
              renderItem={
                ({ item }) => (
                  <Character
                    character={item}
                    legend
                    image={generateUrlImage(item.thumbnail.path, item.thumbnail.extension, 'standard_fantastic')}
                    onPress={() => navigate('Details', { characterId: item.id })}
                  />
                )
              }
              ListEmptyComponent={<ListEmpty>Favorites not found</ListEmpty>}
            />
          )}
        </FavoriteContext.Consumer>
      </Background>
    )
  }
}

Favorites.propTypes = {
  navigation: PropTypes.object.isRequired,
}

export default Favorites
