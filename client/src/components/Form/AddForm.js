import React from 'react';
import { Button, Form } from 'semantic-ui-react';

const AddForm = () => (
    <Form>
        <Form.Group widths='equal'>
            <Form.Input
                fluid
                id='form-subcomponent-shorthand-input-first-name'
                label='First name'
                placeholder='First name'
                name='first-name'
                value={props.first-name}
                type='text'
                onChange={props.handleInputChange}
            />
            <Form.Input
                fluid
                id='form-subcomponent-shorthand-input-last-name'
                label='Last name'
                placeholder='Last name'
                name='last-name'
                value={props.last-name}
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
                            id='sun-start'
                            type='text'
                            value={props.sun-start}
                            name='sun-start'
                            onChange={props.handleInputChange}
                        />
                    </Form.Field>
                    -
                    <Form.Field>
                        <Input 
                            placeholder='End time' 
                            id='sun-end'
                            type='text'
                            value={props.sun-end}
                            name='sun-end'
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
                            id='mon-start'
                            type='text'
                            value={props.mon-start}
                            name='mon-start'
                            onChange={props.handleInputChange}
                        />
                    </Form.Field>
                    -
                    <Form.Field>
                        <Input 
                            placeholder='End time'
                            id='mon-end'
                            type='text'
                            value={props.mon-end}
                            name='mon-end'
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
                            id='tue-start'
                            type='text'
                            value={props.tue-start}
                            name='tue-start'
                            onChange={props.handleInputChange}
                        />
                    </Form.Field>
                    -
                    <Form.Field>
                        <Input 
                            placeholder='End time' 
                            id='tue-end'
                            type='text'
                            value={props.tue-end}
                            name='tue-end'
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
                            id='wed-start'
                            type='text'
                            value={props.wed-start}
                            name='wed-start'
                            onChange={props.handleInputChange}
                        />
                    </Form.Field>
                    -
                    <Form.Field>
                        <Input 
                            placeholder='End time' 
                            id='wed-end'
                            type='text'
                            value={props.wed-end}
                            name='wed-end'
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
                            id='thu-start'
                            type='text'
                            value={props.thu-start}
                            name='thu-start'
                            onChange={props.handleInputChange}
                        />
                    </Form.Field>
                    -
                    <Form.Field>
                        <Input 
                            placeholder='End time' 
                            id='thu-end'
                            type='text'
                            value={props.thu-end}
                            name='thu-end'
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
                            id='fri-start'
                            type='text'
                            value={props.fri-start}
                            name='fri-start'
                            onChange={props.handleInputChange}
                        />
                    </Form.Field>
                    -
                    <Form.Field>
                        <Input 
                            placeholder='End time' 
                            id='fri-end'
                            type='text'
                            value={props.fri-end}
                            name='fri-end'
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
                            id='sat-start'
                            type='text'
                            value={props.sat-start}
                            name='sat-start'
                            onChange={props.handleInputChange}
                        />
                    </Form.Field>
                    -
                    <Form.Field>
                        <Input 
                            placeholder='End time' 
                            id='sat-end'
                            type='text'
                            value={props.sat-end}
                            name='sat-end'
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
)

export default AddForm;

// might be passing props through forms