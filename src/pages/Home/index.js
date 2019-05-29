import React, { Component } from 'react'
import { View, Button } from 'react-native'
import PropTypes from 'prop-types'

class Home extends Component {
  static navigationOptions = {
    title: 'Home',
  }

  render() {
    return (
      <View>
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('Details')}
        />
      </View>
    )
  }
}

Home.propTypes = {
  navigation: PropTypes.object.isRequired,
}

export default Home
