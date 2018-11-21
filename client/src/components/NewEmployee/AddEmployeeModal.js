import React, { Component } from "react";
import { Button, Header, Icon, Modal, Form, Input, Button, Grid } from 'semantic-ui-react';

class AddEmployeeModal extends Component {
    state = {
        firstName: "",
        lastName: "",
        sunStart: "",
        sunEnd: "",
        monStart: "",
        monEnd: "",
        tueStart:"",
        tueEnd: "",
        wedStart: "",
        wedEnd: "",
        thuStart:"",
        thuEnd:"",
        friStart: "",
        friEnd: "",
        satStart: "",
        satEnd: ""
    }
}
const AddEmployeeModal = () => (
  <Modal trigger={<Button>Add Employee</Button>} closeIcon>
    <Header icon='user plus' content='New Employee' />
    <Modal.Content>
        <Form>
            <Grid>
                <Grid.Row>
                    <Grid.Column>
                        <Form.Group widths="equal">
                            <Form.Input fluid label="First name" placeholder="First name" name="first-name" value={this.state.firstName} onChange={this.handleChange} />
                            <Form.Input fluid label="Last name" placeholder="Last name" name="last-name" value={this.state.lastName} onChange={this.handleChange} />
                        </Form.Group>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column>
                        <Form.Group inline>
                            <Form.Field>
                                <label>Sunday</label>
                                <Input 
                                    placeholder="Start time" 
                                    name="sun-start" 
                                    value={this.state.sunStart}
                                    onChange={this.handleChange} 
                                />
                            </Form.Field>
                            <Form.Field>
                                <label>-</label>
                                <Input 
                                    placeholder="End time" 
                                    name="sun-end"
                                    value={this.state.sunEnd}
                                    onChange={this.handleChange}
                                />
                            </Form.Field>
                        </Form.Group>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column>
                        <Form.Group inline>
                            <Form.Field>
                                <label>Monday</label>
                                <Input 
                                    placeholder="Start time" 
                                    name="mon-start"
                                    value={this.state.monStart}
                                    onChange={this.handleChange}
                                />
                            </Form.Field>
                            <Form.Field>
                                <label>-</label>
                                <Input 
                                    placeholder="End time"
                                    name="mon-end"
                                    value={this.state.monEnd}
                                    onChange={this.handleChange}
                                />
                            </Form.Field>
                        </Form.Group>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column>
                        <Form.Group inline>
                            <Form.Field>
                                <label>Tuesday</label>
                                <Input 
                                    placeholder="Start time"
                                    name="tue-start"
                                    value={this.state.tueStart}
                                    onChange={this.handleChange}
                                />
                            </Form.Field>
                            <Form.Field>
                                <label>-</label>
                                <Input 
                                    placeholder="End time" 
                                    name="tue-end"
                                    value={this.state.tueEnd}
                                    onChange={this.handleChange}
                                />
                            </Form.Field>
                        </Form.Group>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column>
                        <Form.Group inline>
                            <Form.Field>
                                <label>Wednesday</label>
                                <Input 
                                    placeholder="Start time" 
                                    name="wed-start"
                                    value={this.state.wedStart}
                                    onChange={this.handleChange}
                                />
                            </Form.Field>
                            <Form.Field>
                                <label>-</label>
                                <Input 
                                    placeholder="End time"
                                    name="wed-end"
                                    value={this.state.wedEnd}
                                    onChange={this.handleChange}
                                />
                            </Form.Field>
                        </Form.Group>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column>
                        <Form.Group inline>
                            <Form.Field>
                                <label>Thursday</label>
                                <Input 
                                    placeholder="Start time" 
                                    name="thu-start"
                                    value={this.state.thuStart}
                                    onChange={this.handleChange}    
                                />
                            </Form.Field>
                            <Form.Field>
                                <label>-</label>
                                <Input 
                                    placeholder="End time" 
                                    name="thu-end"
                                    value={this.state.thuEnd}
                                    onChange={this.handleChange}    
                                />
                            </Form.Field>
                        </Form.Group>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column>
                        <Form.Group inline>
                            <Form.Field>
                                <label>Friday</label>
                                <Input 
                                    placeholder="Start time" />
                            </Form.Field>
                            <Form.Field>
                                <label>-</label>
                                <Input placeholder="End time" />
                            </Form.Field>
                        </Form.Group>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column>
                        <Form.Group inline>
                            <Form.Field>
                                <label>Saturday</label>
                                <Input placeholder="Start time" />
                            </Form.Field>
                            <Form.Field>
                                <label>-</label>
                                <Input placeholder="End time" />
                            </Form.Field>
                        </Form.Group>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Form>
    </Modal.Content>
    <Modal.Actions>
      <Button color='red'>
        <Icon name='remove' /> Cancel
      </Button>
      <Button color='green'>
        <Icon name='checkmark' /> Submit
      </Button>
    </Modal.Actions>
  </Modal>
)

export default AddEmployeeModal;