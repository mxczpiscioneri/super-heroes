import React, { Component } from 'react'
import { View, Button } from 'react-native'
import PropTypes from 'prop-types'

class Details extends Component {
  static navigationOptions = {
    title: 'Details',
  }

  render() {
    return (
      <View>
        <Button
          title="Go back"
          onPress={() => this.props.navigation.goBack()}
        />
      </View>
    )
  }
}

Details.propTypes = {
  navigation: PropTypes.object.isRequired,
}

export default Details
