import React, { Component } from 'react';

import './App.css';

import Header from './template/header.jsx'
import Main from './template/main.jsx'
import Footer from './template/footer.jsx'

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
