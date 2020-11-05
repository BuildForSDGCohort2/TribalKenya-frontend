/* eslint-disable max-statements */
import React, { useState } from 'react';
import { connect } from 'react-redux';
import SortDescription from './SortDescription';
import Trek from '../trek/Trek';
import AddTrekForm from './AddTrekForm';
import { addTrekToDb, addFilesToStorage, fetchRecentTreks } from '../../state/treks/treks.actions';
import PreLoader from '../pre-loader/PreLoader';

const TreksPageContent = ({ sortDes, changeDes, treks, currentNav, profile, changeNav, addTrekToDb, addFilesToStorage, loading, fetchRecentTreks }) => {
  const [newTrekLoading, setNewTrekLoading] = useState(false);
  const getInputs = async (profile, trek) => {
    try {
      const newTrek = {
        ...trek,
        id: '',
        profileId: profile.id,
        username: profile.username,
        profile_pic: profile.photoURL,
        date_posted: new Date(Date.now()),
        comments: [],
        reports: [],
        reposts: [],
        likes: []
      };
      changeNav('recent');
      changeDes('Most recent Treks');
      setNewTrekLoading(true);
      const trekReadyToUpload = await addFilesToStorage(newTrek);
      const tb = { ...newTrek, images: trekReadyToUpload.images, videos: trekReadyToUpload.videos };
      await addTrekToDb(tb);
      await fetchRecentTreks({ currentNav: 'recent', profile: profile }, () => null, () => setNewTrekLoading(false));
      setNewTrekLoading(false);
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
        <div className="trek-page-content center column">
            <SortDescription sortDes={sortDes} />
            {loading ? <PreLoader /> : (
              <>
              {currentNav === 'post' ? <AddTrekForm getInputs={(trek) => getInputs(profile, trek)} profile={profile} /> : (
                <div className="treks">
                  {newTrekLoading ? (
                    <>

                    <PreLoader />
                    <p className="medium-text bold c-cream text-center overpass">Uploading your trek</p>
                    </>
                  ) : null}
                    {treks.map((key) => (
                      <div key={key.id} data-aos="fade-up">
                        <Trek trek={key} treks={treks} />
                      </div>
                    ))}
                    {treks.length < 1 && currentNav === 'private' ? (
                      <div className="w-100 center text-center">
                        <h3 className="heading small-caps overpass c-cream">You don&apos;t have Private Treks</h3>
                      </div>
                    ) : null}
                </div>
              )}
              </>
            )}
        </div>
  );
};

const mapStateToProps = (state) => ({
  profile: state.auth.profile
});

const mapDispatchToProps = (dispatch) => ({
  addTrekToDb: (trek) => dispatch(addTrekToDb(trek)),
  addFilesToStorage: (trek) => dispatch(addFilesToStorage(trek)),
  fetchRecentTreks: (info, startLoading, stopLoading) => dispatch(fetchRecentTreks(info, startLoading, stopLoading))
});

export default connect(mapStateToProps, mapDispatchToProps)(TreksPageContent);
