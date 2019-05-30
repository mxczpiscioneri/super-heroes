import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { AsyncStorage } from 'react-native'

const { Consumer, Provider: ContextProvider } = React.createContext()

class Provider extends Component {
  constructor(props) {
    super(props)

    this.state = {
      favorites: [],
      favoritesIds: [],
      setFavorite: this.setFavorite,
      getFavorites: this.getFavorites,
    }
  }

  setFavorite = async character => {
    let favorites = await AsyncStorage.getItem('favorites') || '[]'
    let exists = false

    favorites = JSON.parse(favorites).filter(favorite => {
      const result = favorite.id === character.id
      if (result) {
        exists = true
      }
      return !result
    })

    if (exists === false) {
      favorites.push(character)
    }

    const favoritesIds = favorites.map(item => item.id)

    this.setState({
      favorites,
      favoritesIds,
    })

    AsyncStorage.setItem('favorites', JSON.stringify(favorites))
  }

  getFavorites = async () => {
    const favorites = await AsyncStorage.getItem('favorites') || '[]'

    this.setState({ favorites: JSON.parse(favorites) })
  }

  async componentDidMount() {
    const favorites = await AsyncStorage.getItem('favorites') || '[]'

    const favoritesIds = JSON.parse(favorites).map(item => item.id)

    this.setState({
      favorites,
      favoritesIds,
    })
  }

  render = () => (
    <ContextProvider value={this.state}>{this.props.children}</ContextProvider>
  )
}


Provider.propTypes = {
  children: PropTypes.any.isRequired,
}

export default { Consumer, Provider }
