import React from 'react';
import { Button, Image, List } from 'semantic-ui-react';
import ListingItem from '../List/ListingItem.js'

const CurrentListItem = ({ picture, employee, handleClick }) => (
    <ListingItem>
        <List.Item>
        <List.Content floated='right'>
            <Button onClick={() => handleClick(employee)}>Edit</Button>
        </List.Content>
        <Image avatar src={picture} />
        <List.Content>{employee}</List.Content>
    </List.Item>
    </ListingItem>
)

export default CurrentListItem;

// make sure to write function to handle editing and updating current employee info in db