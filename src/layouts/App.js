import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import '../styles/App.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

class App extends Component {
  state = {

  }

  render() {
    return (
      <Router>
        <header>
          <Header />
        </header>
        <main>
          <Main />
        </main>
        <footer>
          <Footer />
        </footer>
      </Router>
    );
  }
}

export default App;