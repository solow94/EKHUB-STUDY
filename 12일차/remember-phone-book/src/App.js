import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PhoneForm from './components/PhoneForm';
import PhoneInfoList from './components/PhoneInfoList';

class App extends Component {
  id = 0
  state = {
    information: [

    ]
  }

  handleCreate = (data) => {
    const { information } = this.state;
    this.setState({
      information: information.concat({ id: this.id++, ...data })
    })
  }

  render() {
    return (
      <div className="App">
        <PhoneForm
          onCreate={this.handleCreate}
        />

        <PhoneInfoList
          data={this.state.information}
        />

      </div>
    );
  }
}

export default App;
