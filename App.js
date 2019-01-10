/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TextInput, TouchableHighlight } from 'react-native';
import PropTypes from 'prop-types';
import SendBird from 'sendbird'
import { FormLabel, FormInput, FormValidationMessage, Button } from 'react-native-elements'
import Menu from './components/Menu';
import Login from './components/Login';
import { createStackNavigator, createAppContainer } from 'react-navigation';

const MainNavigator = createStackNavigator({
  Login: { screen: Login },
  Menu: { screen: Menu }
})

class App extends Component {
  render() {
    return (
        <MainNavigator />
      
    )
  }
}

export default App;