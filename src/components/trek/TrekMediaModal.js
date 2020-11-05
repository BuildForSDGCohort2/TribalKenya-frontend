import React from 'react';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import TrekImages from './TrekImages';
import TrekVidoes from './TrekVidoes';

const TrekMediaModal = ({ modal, toggle, trek }) => {
  return (
    <Modal isOpen={modal} toggle={toggle}>
      <ModalHeader toggle={toggle} className="overpass small-caps">Images / Videos</ModalHeader>
      <ModalBody className="black-bg">
        <div
          className="uk-position-relative uk-visible-toggle uk-light"
          tabIndex="-1"
          uk-slider="center: true"
        >
          <ul className="uk-slider-items uk-grid uk-grid-match" uk-height-viewport="offset-top: true; offset-bottom: 30">
            {trek.images.length > 0 ? <TrekImages slides={trek.images} extraClass="trek-video" /> : null }
            {trek.videos.length > 0 ? <TrekVidoes slides={trek.videos} extraClass="trek-video" /> : null }
          </ul>

          <a
            className="uk-position-center-left uk-position-small"
            href="/"
            uk-slidenav-previous="true"
            uk-slider-item="previous"
          ></a>
          <a
            className="uk-position-center-right uk-position-small"
            href="/"
            uk-slidenav-next="true"
            uk-slider-item="next"
          ></a>
        </div>
      </ModalBody>
    </Modal>
  );
};

export default TrekMediaModal;
