import React from "react";
import { Form, Input, Button } from "semantic-ui-react";
import { Grid, Table } from 'semantic-ui-react'

const NewForm = () => (
    <Form>
        <Form.Group widths="equal">
            <Form.Input fluid label="First name" placeholder="First name" />
            <Form.Input fluid label="Last name" placeholder="Last name" />
        </Form.Group>

        <Button type="submit">Submit</Button>
    </Form>
)

export default NewForm;