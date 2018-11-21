import React from 'react';
import { Header, Icon } from 'semantic-ui-react';

const AddListItem = ({ handleClick }) => (
  <Header as='h2'>
    <Icon name='plus circle' onClick={() => handleClick()} />
    <Header.Content>Add New Employee</Header.Content>
  </Header>
)

export default AddListItem;

// make sure that i write a function to handle adding new employee info to db