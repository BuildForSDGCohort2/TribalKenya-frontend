import React, { useState } from 'react';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { ImCancelCircle } from 'react-icons/im';
import PopOver from './PopOver';

const Treker = ({ trek, deleteTrek, updateModal, person, commented, profile }) => {
  const [popoverOpen, setPopoverOpen] = useState(false);
  const deleteT = (ev, trekId) => {
    ev.preventDefault();
    setPopoverOpen(false);
    deleteTrek(trekId);
  };
  return (
    <>
      {trek ? (
        <>
          <div className="trek-owner mb-2">
            <img src={trek.profile_pic} alt="trek owner" />
            <span className="trek-username">{trek.username}</span>
            {trek.profileId === profile.id ? (
              <div className="float-right">
                <span
                  className="m-auto"
                  onClick={() => setPopoverOpen(!popoverOpen)}
                >
                  {popoverOpen ? <ImCancelCircle /> : <BsThreeDotsVertical />}
                </span>
                <PopOver
                  trekId={trek.id}
                  deleteT={deleteT}
                  popoverOpen={popoverOpen}
                  toggle={() => setPopoverOpen(false)}
                  updateModal={updateModal}
                />
              </div>
            ) : null}
          </div>
        </>
      ) : null}
      {person ? (
        <>
        <div className="trek-owner mb-2">
          <img src={person.profile_pic} alt="trek owner" />
          <span className="trek-username">{person.username}</span>
        </div>
      </>
      ) : null}
      {commented ? (
        <>
        <div className="trek-owner mb-2">
          <img src={commented.profile_pic} alt="trek owner" />
          <span className="trek-username">{commented.username}</span>
        </div>
      </>
      ) : null}
    </>
  );
};

export default Treker;
