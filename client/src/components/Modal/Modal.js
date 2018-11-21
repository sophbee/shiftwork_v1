import React from 'react';
import { Button, Header, Icon, Modal } from 'semantic-ui-react';

const Modal = ({ buttonText }) => (
  <Modal trigger={<Button>{buttonText}</Button>} closeIcon>
    <Header icon='archive' content='Archive Old Messages' />
    <Modal.Content>
      <p>
        Your inbox is getting full, would you like us to enable automatic archiving of old messages?
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

export default Modal;