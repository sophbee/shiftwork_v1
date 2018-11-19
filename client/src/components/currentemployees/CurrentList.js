import React from 'react'
import { Button, List, Placeholder } from 'semantic-ui-react'

const CurrentList = () => (
  <List divided verticalAlign='middle'>
    <List.Item>
      <List.Content floated='right'>
        <Button>Update</Button>
      </List.Content>
      <Placeholder.Image />
      <List.Content>Lena Lane</List.Content>
    </List.Item>
    <List.Item>
      <List.Content floated='right'>
        <Button>Update</Button>
      </List.Content>
      <Placeholder.Image />
      <List.Content>Lena Lane</List.Content>
    </List.Item>
    <List.Item>
      <List.Content floated='right'>
        <Button>Update</Button>
      </List.Content>
      <Placeholder.Image />
      <List.Content>Lena Lane</List.Content>
    </List.Item>
    <List.Item>
      <List.Content floated='right'>
        <Button>Update</Button>
      </List.Content>
      <Placeholder.Image />
      <List.Content>Lena Lane</List.Content>
    </List.Item>
  </List>
)

export default CurrentList;