import React, { Component } from "react";
import { Container } from "semantic-ui-react";
import AddForm from "../../components/Form/AddForm.js";

class NewEmployee extends Component {
    state = {

    };

    handleInputChange = e => {
        
    }


}

render() {
    return (
        <Container>
            <AddForm
                handleInputChange={this.handleInputChange}
                handleFormSubmit={this.handleFormSubmit}
                
        </Container>
    )
}