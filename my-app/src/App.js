import React, { Component } from 'react';
import './App.css';
import Header from './components/Header'
import Banner from './components/Banner'
import SubmissionList from './components/SubmissionList';

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Banner/>
        <div className="main">
          <SubmissionList/>
        </div>
      </div>
        
    );
  }
}

export default App;
