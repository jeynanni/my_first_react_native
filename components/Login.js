
import React, { Component } from 'react';
import { View , Text} from 'react-native';
import { FormLabel, FormInput, FormValidationMessage, Button } from 'react-native-elements'
import SendBird from 'sendbird';
import { createStackNavigator, createAppContainer } from 'react-navigation';
class Login extends Component {
    static navigationOptions = {
        title: 'LOGIN'
    }

    constructor(props) {
        super(props);
        this.state = {
            userId: '',
            nickname: '',
            error: '',
        }
    }

    _userIdChanged = (userId) => {
        this.setState({ userId });
    }

    _nicknameChanged = (nickname) => {
        this.setState({ nickname });
    }

    _onButtonPress = () => {
        const { userId, nickname } = this.state;
        const sb = new SendBird({ 'appId': '9DA1B1F4-0BE6-4DA8-82C5-2E81DAB56F23' });
        sb.connect(userId, (user, error) => {
            if (error) {
                this.setState({ error });
            } else {
                sb.updateCurrentUserInfo(nickname, null, (user, error) => {
                    if (error) {
                        this.setState({ error });
                    } else {
                        this.setState({
                            userId: '',
                            nickname: '',
                            error: ''
                        }, () => {
                            this.props.navigation.navigate('Menu');
                        });
                    }
                })
            }
        })
    }
    

    render() {
        return (
            <View style={{backgroundColor: '#fff', flex: 1}}>
                <View style={styles.containerStyle}>
                    <FormLabel>User ID</FormLabel>
                    <FormInput
                        value={this.state.userId}
                        onChangeText={this._userIdChanged}
                    />
                </View>
                <View style={styles.containerStyle}>
                    <FormLabel>Nickname</FormLabel>
                    <FormInput
                        value={this.state.nickname}
                        onChangeText={this._nicknameChanged}
                    />
                </View>
                <View style={styles.containerStyle}>
                    <Button
                        buttonStyle={{backgroundColor: '#2096f3'}}
                        title='Connect' 
                        disabled={this.state.userId === '' || this.state.nickname === '' ? true : false}
                        onPress={this._onButtonPress}
                    />
                    
                </View>
                <View style={styles.containerStyle}>
                    <FormValidationMessage>{this.state.error}</FormValidationMessage>
                </View>
            </View>
        )
    }
}

const styles = {
    containerStyle: {
        marginTop: 10
    }
}

export default Login;