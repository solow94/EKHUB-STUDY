import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PhoneForm from './components/PhoneForm';
import PhoneInfoList from './components/PhoneInfoList';
import PhoneSearch from './components/PhoneSearch';

class App extends Component {

  id = 0
  state = {
    information: [

    ],
    keyword: ""
  }

  handleCreate = (data) => {
    const { information } = this.state;
    this.setState({
      information: information.concat({ id: this.id++, ...data })
    })
  }

  handleRemove = (id) => {
    const { information } = this.state;
    this.setState({
      information: information.filter(
        info => info.id !== id
      )
    })
  }

  handleUpdate = (id, data) => {
    const { information } = this.state;
    this.setState({
      information: information.map(
        info => id === info.id
          ? { ...info, ...data }
          : info
      )
    })
  }

  handleChange = (e) => {
    this.setState({
      keyword: e.target.value
    })
  }

  render() {
    const { information, keyword } = this.state;
    const filteredList = information.filter(
      info => info.name.indexOf(keyword) !== -1
    );

    return (
      <div className="App">
        <PhoneForm
          onCreate={this.handleCreate}
        />

        {/* <PhoneSearch
        /> */}
        <p>
          <input
            placeholder="검색 할 이름을 입력하세요"
            value={keyword}
            onChange={this.handleChange}
          />
        </p>

        <PhoneInfoList
          // data={this.state.information}
          data={filteredList}
          onRemove={this.handleRemove}
          onUpdate={this.handleUpdate}
        />
      </div>
    );
  }
}

export default App;
