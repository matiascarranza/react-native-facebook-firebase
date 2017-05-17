'use strict'

import React, {Component} from 'react';

import {
  Text,
  TextInput,
  View,
  TouchableHighlight,
  ActivityIndicator
} from 'react-native';

import { LoginButton } from 'react-native-fbsdk';

import { Actions, ActionConst } from 'react-native-router-flux';


import styles from '../styles/styles';


export default class Login extends Component {

  constructor(props){
    super(props);

    this.state =(
      {
        loading: true
      }
    )
  }

  componentDidMount(){
    this.setState({
      loading:false
    })
  }

  render() {
    const content = 
        this.state.loading? <ActivityIndicator size="large" /> :
        <LoginButton
          onLoginFinished={
            (error, result) => {
              if (error) {
                alert("Error with facebook login: " + result.error);
              } else if (result.isCancelled) {
                alert("Facebook login cancelled.");
              } else {

                Actions.splash({type: ActionConst.RESET})

 
              }
            }
          }
      />

      return (
        <View style={styles.container}>
          <View style={styles.body}>
            {content}
          </View>
        </View>
      )
  }
}