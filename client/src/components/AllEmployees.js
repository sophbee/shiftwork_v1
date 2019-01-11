import React from 'react';
import { List, Image } from 'semantic-ui-react';

const AllEmployees = props => (
    <List divided relaxed>
        {props.results.map(result => (
            <List.Item key={result.id}>
                <Image avatar src={result.images.url} />
                <List.Content>
                    <List.Header as='a'>{props.name}</List.Header>
                    <List.Description as='a'>{props.availability}</List.Description>
                </List.Content>
            </List.Item>
        ))}
    </List>
)

// not sure if the <image> tag is correct for passing props down