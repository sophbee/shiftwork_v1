import React from 'react';
import { Header, Icon, Image } from 'semantic-ui-react';

const Headline = () => (
  <div>
    <Header as='h2' icon textAlign='center'>
      <Icon name='users' circular />
      <Header.Content>Shift Work</Header.Content>
    </Header>
  </div>
)

export default Headline;