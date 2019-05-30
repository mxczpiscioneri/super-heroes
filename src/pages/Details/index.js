import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  ScrollView,
  ActivityIndicator,
} from 'react-native'
import {
  Background,
  Character,
  Links,
  MoreInfo,
} from '../../components'
import { generateUrlImage } from '../../utils'
import { getCharacters } from '../../services/api'
import {
  Info,
  Description,
} from './styles'

class Details extends Component {
  static navigationOptions = ({ navigation }) => {
    const { state } = navigation
    return {
      title: state.params.title || '',
    }
  }

  constructor(props) {
    super(props)

    this.state = {
      loading: true,
      character: {},
      comics: [],
      series: [],
      stories: [],
      events: [],
    }
  }

  async componentDidMount() {
    const { getParam, setParams } = this.props.navigation
    const characterId = getParam('characterId')

    const response = await getCharacters(`/${characterId}`)
    setParams({ title: response.results[0].name })
    this.setState({
      character: response.results[0],
      loading: false,
    })

    this.showMoreInfo(characterId)
  }

  /**
   * View more character information
   * @param {String} characterId - Character id
   */
  showMoreInfo = async characterId => {
    getCharacters(`/${characterId}/comics`)
      .then(data => {
        this.setState({ comics: data.results })
      })

    getCharacters(`/${characterId}/series`)
      .then(data => {
        this.setState({ series: data.results })
      })

    getCharacters(`/${characterId}/stories`)
      .then(data => {
        this.setState({ stories: data.results })
      })

    getCharacters(`/${characterId}/events`)
      .then(data => {
        this.setState({ events: data.results })
      })
  }

  render() {
    const {
      loading,
      character,
      comics,
      series,
      stories,
      events,
    } = this.state

    return (
      <Background>
        {!loading ?
          <ScrollView>
            <Character
              character={character}
              image={generateUrlImage(character.thumbnail.path, character.thumbnail.extension, 'detail')}
            />

            <Info>
              {character.description.trim() !== '' &&
                <Description>{character.description}</Description>
              }
              {character.urls &&
                <Links urls={character.urls} />
              }
            </Info>

            {comics.length > 0 &&
              <MoreInfo title='Comics' data={comics} />
            }

            {series.length > 0 &&
              <MoreInfo title='Series' data={series} />
            }

            {stories.length > 0 &&
              <MoreInfo title='Stories' data={stories} />
            }

            {events.length > 0 &&
              <MoreInfo title='Events' data={events} />
            }
          </ScrollView> :
          <ActivityIndicator />
        }
      </Background>
    )
  }
}

Details.propTypes = {
  navigation: PropTypes.object.isRequired,
}

export default Details
