import React, { Component } from 'react';
import Headliner from "./components/Headliner/Headliner.js";
import NewEmployer from "./pages/NewEmployee/NewEmployee.js";
import { Container } from 'semantic-ui-react';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Container>
          <Headliner />
          <NewEmployer />
        </Container>
      </div>
    );
  }
}

export default App;
