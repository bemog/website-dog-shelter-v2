import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import '../styles/App.scss';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

class App extends Component {
  state = {

  }

  render() {
    return (
      <Router>
        <div className='wrapper'>
          <header>
            <Header />
          </header>
          <main>
            <Main />
          </main>
          <footer>
            <Footer />
          </footer>
        </div>
      </Router>
    );
  }
}

export default App;