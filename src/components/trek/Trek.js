import React, { useState } from 'react';
import { BsFillCollectionFill } from 'react-icons/bs';
import LazyLoad from 'react-lazyload';
import PreLoader from '../pre-loader/PreLoader';
import TrekInteractions from './TrekInteractions';
import TimeTrekPosted from './TimeTrekPosted';
import Treker from './Treker';
import TrekModal from './TrekModal';

const Trek = ({ trek, treks }) => {
  const [trekLikes, showTrekLikes] = useState(false);
  const [trekComments, showTrekComments] = useState(false);
  const [trekReposts, showTrekReposts] = useState(false);
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
      {treks.indexOf(trek) < 4 ? (
        <LazyLoad
          debounce={100}
          height={200}
          offset={100}
          placeholder={<PreLoader />}
        >
          <article className="p-2">
            <div className="trek">
              <div
                className="trek-left m-1 p-1 c-white"
                style={{ backgroundImage: `url(${trek.trek[0].images[0]})` }}
              >
                {trek.trek[0].images.length > 1 ? (
                  <BsFillCollectionFill />
                ) : null}
              </div>
              <div className="trek-right">
                <Treker trek={trek} />
                <div className="trek-text-content pt-2 small-text">
                  <span className="trek-text">{trek.trek[0].text}</span>
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
        </LazyLoad>
      ) : null}
    </>
  );
};

export default Trek;
