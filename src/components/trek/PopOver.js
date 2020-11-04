import React from 'react';
import { MdUpdate, MdDelete } from 'react-icons/md';

const PopOver = ({ popoverOpen, deleteT, trekId, updateT }) => {
  return (
        <>
        {popoverOpen ? (
            <div className="center column float-left">
                <span onClick={(ev) => deleteT(ev, trekId)}><MdDelete /> Delete</span>
                <span onClick={(ev) => updateT(ev, trekId)}><MdUpdate /> Update</span>
            </div>
        ) : null}
        </>
  );
};

export default PopOver;
