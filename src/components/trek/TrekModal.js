import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Treker from './Treker';
import Comment from './Comment';

const TrekModal = ({ openModal, people, comments, toggleModal, className, title, postId }) => {
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
                    <Comment key={comment.id} postId={postId} comment={comment} />
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
