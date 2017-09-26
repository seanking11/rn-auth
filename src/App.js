import React, { Component } from 'react'
import Header from './components/common/Header'

class App extends Component {
  componentWillMount() {

  }

  render() {
    return (
      <Header
        text={'Authentication'}
      />
    )
  }
}

export default App
