import React from 'react';
import Treker from './Treker';

const Comment = ({ comment }) => {
  return (
    <div className="comment mb-2" key={comment.id}>
            <Treker commented={comment} key={comment} />
            <div className="comment-text">{comment.comment}</div>
          </div>
  );
};

export default Comment;
