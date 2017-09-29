import React, { Component } from 'react'
import CardSection from './common/CardSection'
import Button from './common/Button'
import Card from './common/Card'
import Input from './common/Input'

class LoginForm extends Component {
  state = {
    email: ''
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label={'Email'}
            placeholder={'user@gmail.com'}
            onChangeText={email => this.setState({ email })}
            value={this.state.text}
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

        <CardSection>
          <Button onPress={() => console.log(this.state.text)}>Login</Button>
        </CardSection>
      </Card>
    )
  }
}

export default LoginForm
