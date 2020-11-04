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

const Trek = ({ trek, treks, deleteTrek }) => {
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
                style={{ backgroundImage: `url(${trek.images[0] || trek.videos[0]})` }}
                onClick={() => setShowModal(true)}
              >
                {trek.images.length + trek.videos.length > 1 ? (
                  <BsFillCollectionFill />
                ) : null}
              </div>
              <div className="trek-right">
              <Treker trek={trek} treks={treks} deleteTrek={(docId) => deleteTrek(docId, trek, treks)} updateModal={() => setShowUpdateModal(true)} />
                <div className="trek-text-content pt-2 small-text">
                  <span className="trek-text">{trek.caption}</span>
                </div>
                <TrekInteractions trek={trek} showLikes={() => toggleLikes(trek.id)} showComments={() => toggleComments(trek.id)} showReposts={() => toggleReposts(trek.id)} />
                <TimeTrekPosted timePosted={trek.date_posted} />
                {trekLikes ? (
                  <TrekModal people={trek.likes} openModal={trekLikes} toggleModal={() => toggleLikes(trek.id)} title="Liked by" postId={trek.id} />
                ) : null}
                {trekComments ? (
                  <TrekModal comments={trek.comments} openModal={trekComments} toggleModal={() => toggleComments(trek.id)} title="Comments" postId={trek.id} />
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
