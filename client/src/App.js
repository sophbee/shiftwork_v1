import React, { Component } from 'react';
import AddEmployee from './components/AddEmployee.js';
import { Container } from 'semantic-ui-react';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Container>
          <AddEmployee />
        </Container>
      </div>
    );
  }
}

export default App;
