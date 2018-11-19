import React, { Component } from 'react';
import Headline from "./components/headline/Headline.js";
import Container from "./components/container/Container.js";

class App extends Component {
  render() {
    return (
      <div className="App">
          <Headline />
          <Container />
      </div>
    );
  }
}

export default App;
