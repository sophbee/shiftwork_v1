import React from 'react';
import { Form } from 'semantic-ui-react';

const AddForm = () => (
    <Form>
        <Form.Group widths='equal'>
            <Form.Input
                fluid
                id='form-subcomponent-shorthand-input-first-name'
                label='First name'
                placeholder='First name'
            />
            <Form.Input
                fluid
                id='form-subcomponent-shorthand-input-last-name'
                label='Last name'
                placeholder='Last name'
            />
        </Form.Group>
        <List label={{ as: 'a', color: 'black', content: 'Add availability', ribbon: true }}>
            <List.Item>Sunday
                <Form.Group inline>
                    <Form.Field>
                        <Input placeholder='Start time' />
                    </Form.Field>
                    -
                    <Form.Field>
                        <Input placeholder='End time' />
                    </Form.Field>
                </Form.Group>
            </List.Item>
            <List.Item>Monday
                <Form.Group inline>
                    <Form.Field>
                        <Input placeholder='Start time' />
                    </Form.Field>
                    -
                    <Form.Field>
                        <Input placeholder='End time' />
                    </Form.Field>
                </Form.Group>
            </List.Item>
            <List.Item>Tuesday
                <Form.Group inline>
                    <Form.Field>
                        <Input placeholder='Start time' />
                    </Form.Field>
                    -
                    <Form.Field>
                        <Input placeholder='End time' />
                    </Form.Field>
                </Form.Group>
            </List.Item>
            <List.Item>Wednesday
                <Form.Group inline>
                    <Form.Field>
                        <Input placeholder='Start time' />
                    </Form.Field>
                    -
                    <Form.Field>
                        <Input placeholder='End time' />
                    </Form.Field>
                </Form.Group>
            </List.Item>
            <List.Item>Thursday
                <Form.Group inline>
                    <Form.Field>
                        <Input placeholder='Start time' />
                    </Form.Field>
                    -
                    <Form.Field>
                        <Input placeholder='End time' />
                    </Form.Field>
                </Form.Group>
            </List.Item>
            <List.Item>Friday
                <Form.Group inline>
                    <Form.Field>
                        <Input placeholder='Start time' />
                    </Form.Field>
                    -
                    <Form.Field>
                        <Input placeholder='End time' />
                    </Form.Field>
                </Form.Group>
            </List.Item>
            <List.Item>Saturday
                <Form.Group inline>
                    <Form.Field>
                        <Input placeholder='Start time' />
                    </Form.Field>
                    -
                    <Form.Field>
                        <Input placeholder='End time' />
                    </Form.Field>
                </Form.Group>
            </List.Item>
        </List>
  </Form>
)

export default AddForm;

// might be passing props through forms