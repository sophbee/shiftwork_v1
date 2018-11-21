import React from 'react';
import { List } from 'semantic-ui-react';

const ListingItem = () => (
  <List>
    <List.Item>{props.children}</List.Item>
  </List>
)

export default ListingItem;
