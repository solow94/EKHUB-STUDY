import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ChangeArr from './components/ChangeArr';
import Immutable from './components/Immutable';
import { Map, List } from 'immutable';
import UserList from './components/UserList'
import User from './components/User';

class App extends Component {
  state = {
    data: Map({
      input: '',
      users: List([
        Map({
          id: 1,
          username: 'velopert'
        }),
        Map({
          id: 2,
          username: 'eunji'
        })
      ])
    })
  }

  onChange = (e) => {
    const { value } = e.target;
    const { data } = this.state;
    this.setState({
      data: data.set('input', value)
    });
  }

  onButtonClick = () => {
    const { data } = this.state;
    this.setState({
      data: data.set('input', '')
        .update('users', users => users.push(Map({
          id: this.id++,
          username: data.get('input')
        })))
    });
  }

  render() {

    const { onChange, onButtonClick } = this;
    const { data } = this.state;
    const input = data.get('input');
    const users = data.get('users');
    console.log(users);
    console.log(users.toJS());

    return (
      <div className="App">
        <ChangeArr
        />

        <Immutable
        />

        <div>
          <input onChange={onChange} value={input} />
          <button onClick={onButtonClick}>클릭</button>
        </div>
        <h1>사용자 목록</h1>
        <div>
          <UserList users={users} />
        </div>
      </div>
    );
  }
}

export default App;
