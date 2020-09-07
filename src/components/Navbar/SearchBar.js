import React from 'react';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import { BiSearchAlt } from 'react-icons/bi';

const SearchBar = (props) => {
  const {
    className
  } = props;

  return (
    <div>
      <Modal isOpen={props.search} toggle={props.toggleSearch} className={className}>
        <ModalHeader toggle={props.toggleSearch} className="white-bg"></ModalHeader>
        <ModalBody className="black-bg">
          <div className="search center white-bg">
            <div className="search-input m-1">
              <input
                className="mr-sm-2"
                id="search-input"
                type="search"
                placeholder="Search"
                aria-label="Search"
                autoComplete="off"
              />
            </div>
            <div className="search-icon">
              <BiSearchAlt />
            </div>
          </div>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default SearchBar;
