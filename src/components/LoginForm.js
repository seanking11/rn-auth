import React, { Component } from 'react'
import { Text } from 'react-native'
import firebase from 'firebase'
import CardSection from './common/CardSection'
import Button from './common/Button'
import Card from './common/Card'
import Input from './common/Input'
import Spinner from './common/Spinner'

class LoginForm extends Component {
  state = {
    email: '',
    password: '',
    error: '',
    loading: false
  }

  onButtonPress() {
    const { email, password } = this.state

    this.setState({ error: '', loading: true })
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(this.onLoginSuccess.bind(this))
      .catch(() => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(this.onLoginSuccess.bind(this))
          .catch(this.onLoginFail.bind(this))
      })
  }

  onLoginSuccess() {
    this.setState({
      error: '',
      loading: false,
      email: '',
      password: ''
    })
  }

  onLoginFail() {
    this.setState({
      error: 'Authentication failed.',
      loading: false
    })
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label={'Email'}
            placeholder={'user@gmail.com'}
            onChangeText={email => this.setState({ email })}
            value={this.state.email}
          />
        </CardSection>

        <CardSection>
          <Input
            secureTextEntry
            label={'Password'}
            placeholder={'password'}
            onChangeText={password => this.setState({ password })}
            value={this.state.password}
          />
        </CardSection>

        <Text style={styles.errorStyle}>{this.state.error}</Text>

        <CardSection>
          {this.state.loading ? (
            <Spinner size={'small'} />
          ) : (
            <Button onPress={this.onButtonPress.bind(this)}>Login</Button>
          )}
        </CardSection>
      </Card>
    )
  }
}

const styles = {
  errorStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
}

export default LoginForm
