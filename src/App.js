import React, { Component } from 'react'
import firebase from 'firebase'
import { View } from 'react-native'
import Header from './components/common/Header'
import Button from './components/common/Button'
import LoginForm from './components/LoginForm'


class App extends Component {
  state = {
    loggedIn: false
  }

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyDDiCpz5R42q8NK2KlM-F-j5c_f5ENtNec',
      authDomain: 'rn-auth-9329f.firebaseapp.com',
      databaseURL: 'https://rn-auth-9329f.firebaseio.com',
      projectId: 'rn-auth-9329f',
      storageBucket: 'rn-auth-9329f.appspot.com',
      messagingSenderId: '530622078948'
    })

    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ loggedIn: true })
      } else {
        this.setState({ loggedIn: false })
      }
    })
  }

  render() {
    return (
      <View>
        <Header
          text={'Authentication'}
        />
        {!this.state.loggedIn ? (
          <LoginForm />
        ) : (
          <Button
            onPress={() => firebase.auth().signOut()}
          >
            Log Out
          </Button>
        )}
      </View>

    )
  }
}

export default App
