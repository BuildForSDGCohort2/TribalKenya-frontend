import React, { useState } from 'react';
import { BsThreeDotsVertical } from 'react-icons/bs';
import PopOver from './PopOver';

const Treker = ({ trek, deleteTrek }) => {
  const [popoverOpen, setPopoverOpen] = useState(false);
  const deleteT = (ev, trekId) => {
    ev.preventDefault();
    setPopoverOpen(false);
    console.log(popoverOpen);
    deleteTrek(trekId);
  };
  return (
    <>
      {trek ? (
        <>
        <div className="trek-owner mb-2">
          <img src={trek.profile_pic} alt="trek owner" />
          <span className="trek-username">{trek.username}</span>
          <div className="float-right">
            <span className="m-auto" id="popover1" onClick={() => setPopoverOpen(!popoverOpen)}><BsThreeDotsVertical /></span>
            <PopOver trekId={trek.id} deleteT={deleteT} popoverOpen={popoverOpen} toggle={() => setPopoverOpen(false)} />
          </div>
        </div>
        </>
      ) : null}
    </>
  );
};

export default Treker;
