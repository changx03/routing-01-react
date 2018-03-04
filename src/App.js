import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Blog from './containers/Blog/Blog';

class App extends Component {
  render() {
    return (
      // always load index.html file, even in 404
      // example.com/my-app
      // <BrowserRouter basename="/my-app">
      <BrowserRouter basename="/">
      <div className="App">
        <Blog />
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
