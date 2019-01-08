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

let sb = new SendBird({ appId: 'A7A2672C-AD11-11E4-8DAA-0A18B21C2D82' });

//type Props = {};
export default class App extends Component/*<Props>*/ {
  static propTypes = {}

  state = {
    username: ""
  }

  _connect = (username) => {
    console.log('>>>', sb)
    const self = this;
    sb.connect(username, (user, error) => {
      if (error) {
        console.log('SendBird Login Failed.');
      } else {
        sb.updateCurrebntUserInfo(username, null, (user, error) => {
          if (error) {
            console.log('Update user Failed!');
          } else {
            screenLeft.props.navigation.navigate('Home');
          }
        })
      }
    })
  }

  render() {
    console.log(this.state.username)
    return (
      <View style={styles.container}>
        <View style={styles.loginContainer}>
          <TextInput style={styles.input} value={this.state.username} onChangeText={(text) => this.setState({ username: text })} placeHolder={'Enter User Nickname'} maxLength={12} multiline={false} />
          <TouchableHighlight style={styles.button} underlayColor={'#328FE6'} onPress={() => {
            this._connect(this.state.username)
          }}>
            <Text style={styles.label}>LOGIN</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: '#6E5BAA'
  },
  loginContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: 250,
    height: 50,
    color: '#555555',
    borderColor: '#32C5E6',
    padding: 10,
    borderWidth: 1,
    borderRadius: 4,
    alignSelf: 'center',
    backgroundColor: '#ffffff'
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#328FE6',
    padding: 10,
    marginTop: 10,
    height: 50,
    backgroundColor: '#32c5e6',
  },
  label: {
    width: 230,
    flex: 1,
    alignSelf: 'center',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '600',
    color: '#ffffff'
  },
});
