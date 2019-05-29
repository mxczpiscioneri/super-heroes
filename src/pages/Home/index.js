import React, { Component } from 'react'
import { FlatList } from 'react-native'
import PropTypes from 'prop-types'
import { Background, Character } from '../../components'
import { generateUrlImage } from '../../utils'
import { getCharacters } from '../../services/api'

class Home extends Component {
  constructor(props) {
    super(props)

    this.state = {
      characters: [],
      refreshing: false,
      page: 0,
    }
  }

  componentDidMount() {
    this.loadCharacters()
  }

  /**
   * Method to load characters
   * @param {String} params - Options for filters
   */
  async loadCharacters(params = '') {
    this.setState({ refreshing: true })

    const limitCharacters = 20
    const response = await getCharacters(`?limit=${limitCharacters}&offset=${this.state.page * limitCharacters}${params}`)

    const characters = [...this.state.characters, ...response.results]

    this.setState({
      characters,
      refreshing: false
    })
  }

  /**
   * Method to load more characters
   */
  handleLoadMore() {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }), () => {
      this.loadCharacters()
    })
  }

  render() {
    const { navigate } = this.props.navigation

    return (
      <Background>
        <FlatList
          data={this.state.characters}
          keyExtractor={item => `characters${item.id}`}
          numColumns={2}
          refreshing={this.state.refreshing}
          onRefresh={() => this.loadCharacters()}
          onEndReached={() => this.handleLoadMore()}
          onEndThreshold={0.5}
          onEndReachedThreshold={0.5}
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
        />
      </Background>
    )
  }
}

Home.propTypes = {
  navigation: PropTypes.object.isRequired,
}

export default Home
