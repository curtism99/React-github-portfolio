import React, {Component} from 'react';
import Profile from './Proflie';
import Header from '../components/Header/Header';
import logo from '../logo.svg';
import './App.css';

class App extends Component {
render() {
    return (
        <div className="App">
          <Header />
          <Profile />
        </div>
    );
  }
}

export default App;
