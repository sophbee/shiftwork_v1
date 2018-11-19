import React from 'react';
import { Header, Icon } from 'semantic-ui-react';

const CurrentHeader = () => (
  <Header as='h2'>
    <Icon name='archive' />
    <Header.Content>Current Employees</Header.Content>
  </Header>
)

export default CurrentHeader;