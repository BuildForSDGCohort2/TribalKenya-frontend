import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Treker from './Treker';
import Comment from './Comment';
import AddCommentForm from './AddCommentForm';

const TrekModal = ({ openModal, people, comments, toggleModal, className, title, trek }) => {
  return (
    <div>
      <Modal isOpen={openModal} toggle={toggleModal} className={className}>
        <ModalHeader toggle={toggleModal} className="white-bg">{title}</ModalHeader>
        <ModalBody className="black-bg c-white">
          {people ? (
              <>
              {people.map((person) => (
                  <Treker person={person} key={person} />
              ))}
              </>
          ) : null}
          {comments ? (
              <div className="comments">
                <AddCommentForm trek={trek} comments={comments} />
                {comments.map((comment) => (
                    <Comment key={comment.username} comment={comment} />
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
