import React, { useState } from 'react';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { Popover, PopoverHeader, PopoverBody } from 'reactstrap';
import { MdUpdate, MdDelete } from 'react-icons/md';

const Treker = ({ trek, commented, commentOwner }) => {
  const [popoverOpen, setPopoverOpen] = useState(false);
  return (
    <>
      {trek ? (
        <>
        <div className="trek-owner mb-2">
          <img src={trek.profile_pic} alt="trek owner" />
          <span className="trek-username">{trek.username}</span>
          <div className="float-right">
            <span className="m-auto" id="Popover1"><BsThreeDotsVertical /></span>
            <Popover placement="bottom" isOpen={popoverOpen} target="Popover1" toggle={() => setPopoverOpen(!popoverOpen)}>
              <PopoverHeader className="overpass small-caps medium-text white-bg">Options</PopoverHeader>
              <PopoverBody className="black-bg overpass center column d-u-trek">
                <span><MdDelete /> Delete</span>
                <span><MdUpdate /> Update</span>
              </PopoverBody>
            </Popover>
          </div>
        </div>
        </>
      ) : null}
      {commented ? (
          <div className={`trek-owner mb-2 ${commentOwner}`}>
          <img src={commented.profile_pic} alt="trek owner" />
          <span className="trek-username">{commented.username}</span>
        </div>
      ) : null}
    </>
  );
};

export default Treker;
