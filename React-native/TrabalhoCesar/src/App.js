import React, { Component } from 'react'
import SourceScreen from './screens/SourceScreen'
import DetailsScreen from './screens/DetailsScreen'
import {
  AppRegistry,
  View,
  Text
} from 'react-native'

export default class App extends Component {

  render() {
    return (
      <SourceScreen/>
    )
  }
}

// skip this line if using Create React Native App
AppRegistry.registerComponent('TrabalhoCesar', () => App)