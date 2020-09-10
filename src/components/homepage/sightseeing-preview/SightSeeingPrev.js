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
                    <div className="gallery-item center column animate__animated animate__zoomIn cursor"
                        key={key.name}
                        style={{ backgroundImage: `url(${key.poster})` }} >
                        <div className="gallery-text animate__animated animate__slideInDown">
                            <h1 className="medium-text animate__animated animate__rotateInDownLeft">{key.name}</h1>
                            <p className="small-text animate__animated animate__rotateInUpRight">{key.location}</p>
                        </div>
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
