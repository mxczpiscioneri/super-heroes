import React, { Component } from 'react'
import PropTypes from 'prop-types'
import SearchBar from 'react-native-searchbar'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { FlatList } from 'react-native'
import { Background, Character } from '../../components'
import { generateUrlImage } from '../../utils'
import { getCharacters } from '../../services/api'
import Colors from '../../statics/colors'

class Home extends Component {
  static navigationOptions = ({ navigation }) => {
    const { state } = navigation

    return {
      title: 'Characters',
      headerRight: (
        <Icon
          name={'search'}
          size={24}
          style={{ marginRight: 24 }}
          color={Colors.WHITE}
          onPress={() => state.params.handleSearchVisibility()}
        />
      ),
    }
  }

  constructor(props) {
    super(props)

    this.state = {
      characters: [],
      refreshing: false,
      page: 0,
      hasPagination: false
    }
  }

  componentDidMount() {
    this.loadCharacters()

    const { navigation } = this.props
    navigation.setParams({
      handleSearchVisibility: this.handleSearchVisibility
    })
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
      refreshing: false,
      hasPagination: response.total > response.count
    })
  }

  /**
   * Method to load more characters
   */
  handleLoadMore() {
    if (this.state.hasPagination) {
      this.setState(prevState => ({
        page: prevState.page + 1,
      }), () => {
        this.loadCharacters()
      })
    }
  }

  /**
   * Method to show search bar
   */
  handleSearchVisibility = () => {
    this.searchBar.show()
  }

  /**
   * Method to perform search
   */
  handleSearch = search => {
    this.setState({ characters: [] })
    this.loadCharacters(search && `&nameStartsWith=${encodeURI(search)}`)
  }

  /**
   * Method to hide search bar
   */
  handleHideSearch = () => {
    this.setState({ characters: [] })
    this.loadCharacters()
    this.searchBar.hide()
  }

  render() {
    const { navigate } = this.props.navigation

    return (
      <Background>
        <SearchBar
          ref={ref => { this.searchBar = ref }}
          handleSearch={this.handleSearch}
          onBack={this.handleHideSearch}
        />
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
