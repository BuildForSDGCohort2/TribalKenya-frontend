import React from 'react';
import Treker from './Treker';

const Comment = ({ comment, postId }) => {
  return (
    <>
      {comment.postId === postId ? (
        <>
          <div className="comment" key={comment.id}>
            <Treker commented={comment} key={comment} />
            <div className="comment-text">{comment.comment}</div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default Comment;
