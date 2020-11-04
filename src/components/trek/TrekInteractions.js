import React from 'react';
import { GoReport } from 'react-icons/go';
import { GrLike } from 'react-icons/gr';
import { BiRepost } from 'react-icons/bi';
import { FaRegComments } from 'react-icons/fa';

const TrekInteractions = ({ trek, showLikes, showComments, showReposts }) => {
  return (
        <div className="trek-interactions w-100 mt-3">
            <div className="tags left column">
                <span className="small-text overpass small-caps caps bold">{trek.location}</span>
                <span className="tag">{trek.tags.toString()}</span>
                <span className="small-text overpass caps">Cateogory: <span className="bold">{trek.category}</span></span>
            </div>
            <div className="interactions left mt-2">
                <div className="center interaction">
                    <span className="amount" onClick={() => showLikes()}>{trek.likes.length}</span>
                    <span className="icon"><GrLike /></span>
                </div>
                <div className="center interaction" onClick={showComments}>
                    <span className="amount">{trek.comments.length}</span>
                    <span className="icon"><FaRegComments/></span>
                </div>
                <div className="center interaction ">
                    <span className="amount" onClick={showReposts}>{trek.reposts.length}</span>
                    <span className="icon"><BiRepost/></span>
                </div>
                <div className="center interaction ">
                    <span className="icon"><GoReport /></span>
                </div>
            </div>
        </div>
  );
};

export default TrekInteractions;
