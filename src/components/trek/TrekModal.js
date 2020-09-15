import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Treker from './Treker';

const TrekModal = ({ openModal, people, comments, toggleModal, className, title }) => {
  return (
    <div>
      <Modal isOpen={openModal} toggle={toggleModal} className={className}>
        <ModalHeader toggle={toggleModal} className="white-bg">{title}</ModalHeader>
        <ModalBody className="black-bg c-white">
          {people ? (
              <>
              {people.map((person) => (
                  <Treker commented={person} key={person.id} />
              ))}
              </>
          ) : null}
          {comments ? (
              <div className="comments">
                {comments.map((comment) => (
                    <div className="comment" key={comment.id}>
                        <Treker commented={comment} key={comment} />
                        <div className="comment-text">{comment.comment}</div>
                    </div>
                ))}
              </div>
          ) : null}
        </ModalBody>
        <ModalFooter>
          <Button className="black-bg c-white" onClick={toggleModal}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default TrekModal;
