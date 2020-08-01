import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import '../styles/App.scss';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PawsContainer from './PawsBackground';

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
          <main className='main'>
            <Main />
            <PawsContainer />
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