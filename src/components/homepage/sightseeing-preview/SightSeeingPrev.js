import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import TextContent from '../../TextContent';
import { addpreviewSites } from '../../../state/sightseeing/sightseeing.actions';
import { stPrevData } from '../../../state/sightseeing/stData';

const SightSeeingPrev = ({ previewSites, addpreviewSites }) => {
  useEffect(() => {
    addpreviewSites(stPrevData);
  }, [addpreviewSites]);
  return (
      <>
        <section className="st-prev-sec w-100 p-3">
            <TextContent heading="Sightseeing" textColor="c-cream text-center" />
            <div className="gallery">
                {previewSites.map((key) => (
                    <div className="gallery-item p-1" key={key.name}>
                        <img src={key.poster} alt="gallery" className="gallery-img" />
                    </div>
                ))}
            </div>
        </section>
</>
  );
};

const mapStateToProps = (state) => ({
  previewSites: state.sightSeeing.previewSites
});

const mapDispatchToProps = (dispatch) => ({
  addpreviewSites: (previewSites) => dispatch(addpreviewSites(previewSites))
});

export default connect(mapStateToProps, mapDispatchToProps)(SightSeeingPrev);
