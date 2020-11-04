import React from 'react';

const Treker = ({ trek, commented, trekOwner, commentOwner }) => {
  return (
    <>
      {trek ? (
        <div className={`trek-owner mb-2 ${trekOwner}`}>
          <img src={trek.profile_pic} alt="trek owner" />
          <span className="trek-username">{trek.username}</span>
        </div>
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
