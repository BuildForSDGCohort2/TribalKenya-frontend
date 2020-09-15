import React from 'react';

const Treker = ({ trek, commented, trekOwner, commentOwner }) => {
  return (
    <>
      {trek ? (
        <div className={`trek-owner ${trekOwner}`}>
          <img src={trek.user.profile_pic} alt="trek owner" />
          <span className="trek-username">{trek.user.username}</span>
        </div>
      ) : null}
      {commented ? (
          <div className={`trek-owner ${commentOwner}`}>
          <img src={commented.profile_pic} alt="trek owner" />
          <span className="trek-username">{commented.username}</span>
        </div>
      ) : null}
    </>
  );
};

export default Treker;
