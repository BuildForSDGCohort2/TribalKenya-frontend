import React from 'react';
import { BsFillCollectionFill } from 'react-icons/bs';
import LazyLoad from 'react-lazyload';
import { connect } from 'react-redux';
import PreLoader from '../pre-loader/PreLoader';
import TrekInteractions from './TrekInteractions';
import TimeTrekPosted from './TimeTrekPosted';
import { showTrekLikes, showTrekReposts, showTrekComments } from '../../state/treks/treks.actions';
import Treker from './Treker';
import TrekModal from './TrekModal';

const Trek = ({ trek, treks, trekLikes, trekComments, trekReposts, showTrekComments, showTrekLikes, showTrekReposts }) => {
  const toggleLikes = () => showTrekLikes(!trekLikes);
  const toggleReposts = () => showTrekReposts(!trekReposts);
  const toggleComments = () => showTrekComments(!trekComments);

  return (
    <>
      {treks.indexOf(trek) < 4 ? (
        <LazyLoad
          key={trek.id}
          debounce={100}
          height={200}
          offset={100}
          placeholder={<PreLoader />}
        >
          <article className="p-2" key={trek.id}>
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
                <TrekInteractions trek={trek} showLikes={toggleLikes} showComments={toggleComments} showReposts={toggleReposts} />
                <TimeTrekPosted timePosted={trek.date_posted} />
                {trekLikes ? (
                  <TrekModal people={trek.likes} openModal={trekLikes} toggleModal={toggleLikes} title="Liked by" />
                ) : null}
                {trekComments ? (
                  <TrekModal comments={trek.comments} openModal={trekComments} toggleModal={toggleComments} title="Comments" />
                ) : null}
                {trekReposts ? (
                  <TrekModal people={trek.reposts} openModal={trekReposts} toggleModal={toggleReposts} title="Reposted by" />
                ) : null}
              </div>
            </div>
          </article>
        </LazyLoad>
      ) : null}
    </>
  );
};

const mapStateToProps = (state) => ({
  trekLikes: state.treksStore.trekLikes,
  trekComments: state.treksStore.trekComments,
  trekReposts: state.treksStore.trekReposts
});

const mapDispatchToProps = (dispatch) => ({
  showTrekLikes: (trekLikes) => dispatch(showTrekLikes(trekLikes)),
  showTrekComments: (trekComments) => dispatch(showTrekComments(trekComments)),
  showTrekReposts: (trekReposts) => dispatch(showTrekReposts(trekReposts))
});

export default connect(mapStateToProps, mapDispatchToProps)(Trek);
