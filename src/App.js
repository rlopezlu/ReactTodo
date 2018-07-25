import React, { Component } from 'react';
import './App.css';
import TopNav from './components/TopNav';
import Main from './components/Main';
import Side from './components/Side';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TopNav />
        <div className='centerMain'>
          <Side />
          <Main />
        </div>
      </div>
    );
  }
}

export default App;
