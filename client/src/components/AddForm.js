import React from 'react';
import { Button, Form, List, Input } from 'semantic-ui-react';

const AddForm = props => (
    <Form>
        <Form.Group widths='equal'>
            <Form.Input
                fluid
                id='form-subcomponent-shorthand-input-empName'
                label='Employee Name'
                placeholder='Name'
                name='empName'
                value={props.empName}
                type='text'
                onChange={props.handleInputChange}
            />
        </Form.Group>
        <List label={{ as: 'a', color: 'black', content: 'Add availability', ribbon: true }}>
            <List.Item>Sunday
                <Form.Group inline>
                    <Form.Field>
                        <Input 
                            placeholder='Start time'
                            id='sunStart'
                            type='text'
                            value={props.sunStart}
                            name='sunStart'
                            onChange={props.handleInputChange}
                        />
                    </Form.Field>
                    -
                    <Form.Field>
                        <Input 
                            placeholder='End time' 
                            id='sunEnd'
                            type='text'
                            value={props.sunEnd}
                            name='sunEnd'
                            onChange={props.handleInputChange}
                        />
                    </Form.Field>
                </Form.Group>
            </List.Item>
            <List.Item>Monday
                <Form.Group inline>
                    <Form.Field>
                        <Input 
                            placeholder='Start time' 
                            id='monStart'
                            type='text'
                            value={props.monStart}
                            name='monStart'
                            onChange={props.handleInputChange}
                        />
                    </Form.Field>
                    -
                    <Form.Field>
                        <Input 
                            placeholder='End time'
                            id='monEnd'
                            type='text'
                            value={props.monEnd}
                            name='monEnd'
                            onChange={props.handleInputChange}
                        />
                    </Form.Field>
                </Form.Group>
            </List.Item>
            <List.Item>Tuesday
                <Form.Group inline>
                    <Form.Field>
                        <Input 
                            placeholder='Start time' 
                            id='tueStart'
                            type='text'
                            value={props.tueStart}
                            name='tueStart'
                            onChange={props.handleInputChange}
                        />
                    </Form.Field>
                    -
                    <Form.Field>
                        <Input 
                            placeholder='End time' 
                            id='tueEnd'
                            type='text'
                            value={props.tueEnd}
                            name='tueEnd'
                            onChange={props.handleInputChange}
                        />
                    </Form.Field>
                </Form.Group>
            </List.Item>
            <List.Item>Wednesday
                <Form.Group inline>
                    <Form.Field>
                        <Input 
                            placeholder='Start time' 
                            id='wedStart'
                            type='text'
                            value={props.wedStart}
                            name='wedStart'
                            onChange={props.handleInputChange}
                        />
                    </Form.Field>
                    -
                    <Form.Field>
                        <Input 
                            placeholder='End time' 
                            id='wedEnd'
                            type='text'
                            value={props.wedEnd}
                            name='wedEnd'
                            onChange={props.handleInputChange}
                        />
                    </Form.Field>
                </Form.Group>
            </List.Item>
            <List.Item>Thursday
                <Form.Group inline>
                    <Form.Field>
                        <Input 
                            placeholder='Start time' 
                            id='thuStart'
                            type='text'
                            value={props.thuStart}
                            name='thuStart'
                            onChange={props.handleInputChange}
                        />
                    </Form.Field>
                    -
                    <Form.Field>
                        <Input 
                            placeholder='End time' 
                            id='thuEnd'
                            type='text'
                            value={props.thuEnd}
                            name='thuEnd'
                            onChange={props.handleInputChange}
                        />
                    </Form.Field>
                </Form.Group>
            </List.Item>
            <List.Item>Friday
                <Form.Group inline>
                    <Form.Field>
                        <Input 
                            placeholder='Start time' 
                            id='friStart'
                            type='text'
                            value={props.friStart}
                            name='friStart'
                            onChange={props.handleInputChange}
                        />
                    </Form.Field>
                    -
                    <Form.Field>
                        <Input 
                            placeholder='End time' 
                            id='friEnd'
                            type='text'
                            value={props.friEnd}
                            name='friEnd'
                            onChange={props.handleInputChange}
                        />
                    </Form.Field>
                </Form.Group>
            </List.Item>
            <List.Item>Saturday
                <Form.Group inline>
                    <Form.Field>
                        <Input 
                            placeholder='Start time' 
                            id='satStart'
                            type='text'
                            value={props.satStart}
                            name='satStart'
                            onChange={props.handleInputChange}
                        />
                    </Form.Field>
                    -
                    <Form.Field>
                        <Input 
                            placeholder='End time' 
                            id='satEnd'
                            type='text'
                            value={props.satEnd}
                            name='satEnd'
                            onChange={props.handleInputChange}
                        />
                    </Form.Field>
                </Form.Group>
            </List.Item>
        </List>
        <Button 
            onClick={props.handleFormSubmit}
            type='submit'
        >
            Submit
        </Button>
  </Form>
);

export default AddForm;