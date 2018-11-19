import React from "react";
import { Form, Input, Button, Grid, Container } from "semantic-ui-react";

const NewForm = () => (
    <Form>
        <Form.Group widths="equal">
            <Form.Input fluid label="First name" placeholder="First name" />
            <Form.Input fluid label="Last name" placeholder="Last name" />
        </Form.Group>
        <Grid>
            <Grid.Row>
                <Grid.Column>
                    <Form.Group inline>
                        <Form.Field>
                            <label>Sunday</label>
                            <Input placeholder="Start time" />
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
                            <label>Monday</label>
                            <Input placeholder="Start time" />
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
                            <label>Tuesday</label>
                            <Input placeholder="Start time" />
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
                            <label>Wednesday</label>
                            <Input placeholder="Start time" />
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
                            <label>Thursday</label>
                            <Input placeholder="Start time" />
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
                            <label>Friday</label>
                            <Input placeholder="Start time" />
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

        <Button type="submit">Submit</Button>
    </Form>
)

export default NewForm;