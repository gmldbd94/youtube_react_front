import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
const ShowInfoModal = ({visible, info, onCancel}) => {
  
  return(
    <Modal isOpen={visible}>
      <ModalHeader>Modal title</ModalHeader>
      <ModalBody>
        {info}
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={onCancel}>Do Something</Button>
        <Button color="secondary" onClick={onCancel}>Cancel</Button>
      </ModalFooter>
    </Modal>
  )
}

export default ShowInfoModal;


