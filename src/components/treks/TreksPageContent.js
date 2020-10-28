import React from 'react';
import { connect } from 'react-redux';
import SortDescription from './SortDescription';
import Trek from '../trek/Trek';
import AddTrekForm from './AddTrekForm';
import { addTreks, addTrekToState } from '../../state/treks/treks.actions';

const TreksPageContent = ({ sortDes, treks, currentNav, profile, addTreks, changeNav, addTrekToState }) => {
  const getInputs = (trek) => {
    let newTrek = {
      ...trek,
      id: 20003,
      user: { username: profile.username, profile_pic: profile.photoURL },
      date_posted: new Date(Date.now()),
      comments: [],
      reports: [],
      reposts: [],
      likes: []
    };
    if (!trek.caption) newTrek = { ...newTrek, caption: '' };
    if (!trek.tags) newTrek = { ...newTrek, tags: '' };
    if (!trek.location) newTrek = { ...newTrek, location: '' };
    changeNav('recent');
    const trekReadyForState = addTrekToState(newTrek);
    console.log(trekReadyForState);
    addTreks([...treks, trekReadyForState]);
  };
  return (
        <div className="trek-page-content center column">
          {console.log(treks)}
            <SortDescription sortDes={sortDes} />
            {currentNav === 'post' ? <AddTrekForm getInputs={getInputs} /> : (
                <div className="treks">
                    {treks.map((key) => (
                      <div key={key.id} data-aos="fade-up">
                        <Trek trek={key} treks={treks} />
                      </div>
                    ))}
                </div>
            )}
        </div>
  );
};

const mapStateToProps = (state) => ({
  profile: state.auth.profile
});

const mapDispatchToProps = (dispatch) => ({
  addTreks: (treks) => dispatch(addTreks(treks)),
  addTrekToState: (trek) => dispatch(addTrekToState(trek))
});

export default connect(mapStateToProps, mapDispatchToProps)(TreksPageContent);
