import React from 'react';
import { Button, Header, Icon, Modal } from 'semantic-ui-react';
import AddForm from '../Form/AddForm.js';

const AddModal = ({ buttonText }) => (
  <Modal trigger={<Button>{buttonText}</Button>} closeIcon>
    <Header icon='plus square' content='Enter new employee information' />
    <Modal.Content>
      <p>
        <AddForm />
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

export default AddModal;