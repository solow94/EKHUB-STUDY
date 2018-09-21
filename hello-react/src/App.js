import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MyName from './MyName';
import Counter from './Counter';
import PracticeCounter from './PracticeCounter';

class App extends Component {
  render() {
    const name = "react";
    const value = 1;
    const style = {
      background: 'black',
      padding: '16px',
      color: 'white',
      fontSize: '12px'
    };
    return (
  
      //조건문 연습
      <div>
        <PracticeCounter eunji="은지"/>
        <Counter />
        <MyName />
        <div className="App">
          {
            1 + 1 === 2
              ? (<div>맞아요</div>)
              : (<div>틀려요</div>)
          }
        </div>
        <div>
          {
            1 + 1 !== 3 && (<div>틀려요</div>)
          }
        </div>
        <div>
          {
            (function () {
              if (value === 1) return (<div>내이름은 {name}</div>);
              if (value === 2) return (<div>내 값은 {value}</div>);
            })()
          }
        </div>
        <div style={style}>
          {
            (() => {
              if (value === 1) return (<div>화살표 함수</div>);
            })()
          }
        </div>
      </div>
    );
  }
}

export default App;
