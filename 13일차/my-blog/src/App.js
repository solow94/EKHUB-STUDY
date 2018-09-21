import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ViewBlog from './components/ViewBlog';
import LikeList from './components/LikeList';
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to My Blog</h1>
        </header>

        <ViewBlog
        />

        <LikeList
        />
      </div>
    );
  }
}

export default App;
