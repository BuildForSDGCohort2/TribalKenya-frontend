import React, { useState } from 'react';
import { BsFillCollectionFill } from 'react-icons/bs';
import { connect } from 'react-redux';
import TrekInteractions from './TrekInteractions';
import TimeTrekPosted from './TimeTrekPosted';
import Treker from './Treker';
import TrekModal from './TrekModal';
import TrekMediaModal from './TrekMediaModal';
import { deleteTrek } from '../../state/treks/treks.actions';
import TrekUpdateModal from './TrekUpdateModal';
import TrekMediaList from './TrekMediaList';

const Trek = ({ trek, treks, deleteTrek, profile }) => {
  const [trekLikes, showTrekLikes] = useState(false);
  const [trekComments, showTrekComments] = useState(false);
  const [trekReposts, showTrekReposts] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const toggleLikes = (trekId) => {
    if (trek.id === trekId) {
      showTrekLikes(!trekLikes);
    }
  };
  const toggleReposts = (trekId) => {
    if (trek.id === trekId) {
      showTrekReposts(!trekReposts);
    }
  };
  const toggleComments = (trekId) => {
    if (trek.id === trekId) {
      showTrekComments(!trekComments);
    }
  };
  return (
    <>
          {trek.images ? (
            <article className="p-2">
              <TrekMediaModal modal={showModal} toggle={() => setShowModal(!showModal)} trek={trek} />
              <TrekUpdateModal modal={showUpdateModal} toggle={() => setShowUpdateModal(!showUpdateModal)} trek={trek} treks={treks} />
            <div className="trek">
              <div
                className="trek-left m-1 p-1 c-white"
              >
                <span className="c-black overpass mb-1" onClick={() => setShowModal(true)}><BsFillCollectionFill /> Open media</span>
                <TrekMediaList trek={trek} />
              </div>
              <div className="trek-right">
              <Treker trek={trek} treks={treks} profile={profile} deleteTrek={(docId) => deleteTrek(docId, trek, treks)} updateModal={() => setShowUpdateModal(true)} />
                <div className="trek-text-content pt-2 small-text">
                  <span className="trek-text">{trek.caption}</span>
                </div>
                <TrekInteractions trek={trek} treks={treks} profile={profile} showLikes={() => toggleLikes(trek.id)} showComments={() => toggleComments(trek.id)} showReposts={() => toggleReposts(trek.id)} />
                <TimeTrekPosted timePosted={trek.date_posted} />
                {trekLikes ? (
                  <TrekModal people={trek.likes} openModal={trekLikes} toggleModal={() => toggleLikes(trek.id)} title="Liked by" postId={trek.id} />
                ) : null}
                {trekComments ? (
                  <TrekModal comments={trek.comments} trek={trek} openModal={trekComments} toggleModal={() => toggleComments(trek.id)} title="Comments" postId={trek.id} />
                ) : null}
                {trekReposts ? (
                  <TrekModal people={trek.reposts} openModal={trekReposts} toggleModal={() => toggleReposts(trek.id)} title="Reposted by" postId={trek.id} />
                ) : null}
              </div>
            </div>
          </article>
          ) : null}
    </>
  );
};

const mapDispatchToProps = (dispatch) => ({
  deleteTrek: (docId, trek, treks) => dispatch(deleteTrek(docId, trek, treks))
});

export default connect(null, mapDispatchToProps)(Trek);
