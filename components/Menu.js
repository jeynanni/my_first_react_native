import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TextInput, TouchableHighlight } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { FormLabel, FormInput, FormValidationMessage, Button } from 'react-native-elements'
import SendBird from 'sendbird';

export default class Menu extends Component {
    static navigationOptions = {
        title: 'Menu'
    }



    render() {
        return (
            <View>
                <Text>Menu</Text>
            </View>
        )
    }
}

