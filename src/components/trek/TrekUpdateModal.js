import React from 'react';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import { connect } from 'react-redux';
import TrekUpdateForm from './TrekUpdateForm';
import { updateTrek } from '../../state/treks/treks.actions';

const TrekUpdateModal = ({ modal, toggle, trek, updateTrek, treks }) => {
  return (
    <Modal isOpen={modal} toggle={toggle}>
      <ModalHeader toggle={toggle} className="overpass white-bg small-caps">Update Trek</ModalHeader>
      <ModalBody className="black-bg c-cream overpass center column">
        <TrekUpdateForm trek={trek} getInputs={async (newTrek) => {
          try {
            toggle();
            await updateTrek(trek.id, { current: trek, newTrek: newTrek }, treks);
          } catch (error) {
            console.log(error.message);
          }
        }} />
      </ModalBody>
    </Modal>
  );
};

const mapDispatchToProps = (dispatch) => ({
  updateTrek: (docId, trekUpdate, treks) => dispatch(updateTrek(docId, trekUpdate, treks))
});

export default connect(null, mapDispatchToProps)(TrekUpdateModal);
