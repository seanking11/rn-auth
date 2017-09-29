import React, { Component } from 'react'
import firebase from 'firebase'
import { View } from 'react-native'
import Header from './components/common/Header'
import LoginForm from './components/LoginForm'


class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyDDiCpz5R42q8NK2KlM-F-j5c_f5ENtNec',
      authDomain: 'rn-auth-9329f.firebaseapp.com',
      databaseURL: 'https://rn-auth-9329f.firebaseio.com',
      projectId: 'rn-auth-9329f',
      storageBucket: 'rn-auth-9329f.appspot.com',
      messagingSenderId: '530622078948'
    })
  }

  render() {
    return (
      <View>
        <Header
          text={'Authentication'}
        />
        <LoginForm />
      </View>

    )
  }
}

export default App
