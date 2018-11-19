import React from 'react';
import { Header, Icon } from 'semantic-ui-react';

const NewHeader = () => (
  <Header as='h2'>
    <Icon name='plus square' />
    <Header.Content>Add Employee</Header.Content>
  </Header>
)

export default NewHeader;