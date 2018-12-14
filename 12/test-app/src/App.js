import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    sec: 0
  }

  componentDidMount() {
    window.setInterval(() => {
      this.setState(state => ({
        sec: state.sec + 1
      }));

    }, 1000)
  }

  render() {
    return (
      <div className="App" style={{fontSize: '34px'}}>
        {this.state.sec}
      <hr />
        {this.state.sec}
      </div>
    );
  }
}

export default App;
//연결설정 안해도 부모 컴포넌트에서 설정해주면 저절로 연결
