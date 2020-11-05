import React, { useEffect, useState } from 'react';
import { GoReport } from 'react-icons/go';
import { BiRepost, BiLike } from 'react-icons/bi';
import { FaRegComments } from 'react-icons/fa';
import { connect } from 'react-redux';
import { like } from '../../state/treks/treks.actions';

const TrekInteractions = ({ trek, showLikes, showComments, showReposts, like, profile, treks }) => {
  const [liked, setLiked] = useState(false);
  const makeLike = async (profile, trek) => {
    try {
      if (liked) {
        setLiked(false);
        await like(profile, trek, { treks: treks, liked: true });
      }
      if (!liked) {
        setLiked(true);
        await like(profile, trek, { treks: treks, liked: false });
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  const confirmIfLiked = () => trek.likes.forEach((like) => like.profileId === profile.id ? setLiked(true) : null);
  useEffect(() => {
    confirmIfLiked();
  }, []);
  return (
        <div className="trek-interactions w-100 mt-3">
            <div className="tags left column">
                <span className="small-text overpass small-caps caps bold">{trek.location}</span>
                <span className="tag">{trek.tags.toString()}</span>
                <span className="small-text overpass caps">Cateogory: <span className="bold">{trek.category}</span></span>
            </div>
            <div className="interactions left mt-2">
                <div className="center interaction">
                    <span className="amount cursor" onClick={() => showLikes()}>{trek.likes.length}</span>
                    <span className="icon cursor" onClick={() => makeLike(profile, trek)} >{liked ? <BiLike className="c-green" /> : <BiLike />}</span>
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

const mapDispatchToProps = (dispatch) => ({
  like: (profile, trek, info) => dispatch(like(profile, trek, info))
});

export default connect(null, mapDispatchToProps)(TrekInteractions);
