import React from 'react';
import { Button, Header, Icon, Modal } from 'semantic-ui-react';

const UpdateModal = ({ buttonText, name }) => (
  <Modal trigger={<Button>{ buttonText }</Button>} closeIcon>
    <Header icon='archive' content={'Update availability for ' + {name}} />
    <Modal.Content>
      <p>
        {props.children}
      </p>
    </Modal.Content>
    <Modal.Actions>
      <Button color='red'>
        <Icon name='remove' /> Cancel
      </Button>
      <Button color='green'>
        <Icon name='checkmark' /> Confirm
      </Button>
    </Modal.Actions>
  </Modal>
)

export default UpdateModal;

// passing through information that already exists in db - passing props?