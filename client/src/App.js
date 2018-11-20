import React, { Component } from 'react';
import Headliner from "./components/Headliner/Headliner.js";
import EmployeeContainer from "./components/EmpContainer/EmpContainer.js";
import { Container } from 'semantic-ui-react';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Container>
          <Headliner />
          <EmployeeContainer />
        </Container>
      </div>
    );
  }
}

export default App;
