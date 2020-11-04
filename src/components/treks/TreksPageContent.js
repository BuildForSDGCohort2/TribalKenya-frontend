import React from 'react';
import { connect } from 'react-redux';
import SortDescription from './SortDescription';
import Trek from '../trek/Trek';
import AddTrekForm from './AddTrekForm';
import { addTreks, addTrekToState, addTrekToDb, addFilesToStorage, updateTrekState } from '../../state/treks/treks.actions';
import PreLoader from '../pre-loader/PreLoader';

const TreksPageContent = ({ sortDes, treks, currentNav, profile, addTreks, changeNav, addTrekToState, addTrekToDb, addFilesToStorage, loading }) => {
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
      const trekReadyForState = addTrekToState(newTrek);
      addTreks([...treks, trekReadyForState]);
      const trekReadyToUpload = await addFilesToStorage(newTrek, profile);
      const tb = { ...newTrek, images: trekReadyToUpload.images, videos: trekReadyToUpload.videos };
      await addTrekToDb(tb);
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
        <div className="trek-page-content center column">
            <SortDescription sortDes={sortDes} />
            {loading ? <PreLoader /> : (
              <>
              {currentNav === 'post' ? <AddTrekForm getInputs={(trek) => getInputs(profile, trek)} /> : (
                <div className="treks">
                    {treks.map((key) => (
                      <div key={key.id} data-aos="fade-up">
                        <Trek trek={key} treks={treks} />
                      </div>
                    ))}
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
  addTreks: (treks) => dispatch(addTreks(treks)),
  addTrekToState: (trek) => dispatch(addTrekToState(trek)),
  addTrekToDb: (trek) => dispatch(addTrekToDb(trek)),
  addFilesToStorage: (trek, profile) => dispatch(addFilesToStorage(trek, profile)),
  updateTrekState: (updatedItem, itemToUpdate, listOfItems) => dispatch(updateTrekState(updatedItem, itemToUpdate, listOfItems))
});

export default connect(mapStateToProps, mapDispatchToProps)(TreksPageContent);
