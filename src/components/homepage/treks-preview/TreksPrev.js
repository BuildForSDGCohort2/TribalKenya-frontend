import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { BsFillCollectionFill } from 'react-icons/bs';
import { fetchTreks } from '../../../state/treks/treks.actions';
import CustomSlider from '../../slider/CustomSlider';
import TextContent from '../../TextContent';
import { treksData } from '../../../state/treks/treksData';

const TreksPrev = ({ treks, fetchTreks }) => {
  const styles = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    pauseOnHover: false,
    autoplay: true,
    autoplaySpeed: 2000,
    vertical: true,
    swipe: true
  };
  useEffect(() => {
    fetchTreks(treksData);
  }, [treks, fetchTreks]);
  return (
    <section className="treks-prev-sec">
      <TextContent heading="Recent Treks" textColor="c-cream text-center" />
      <CustomSlider customStyles={styles} nextAndPrev={true}>
        {treks.map((key) => (
          <article className="p-2" key={key.id}>
            <div className="trek">
              <div
                className="trek-left m-1 p-1 c-white"
                style={{ backgroundImage: `url(${key.trek[0].images[0]})` }}
              >
                {key.trek[0].images.length > 1 ? <BsFillCollectionFill /> : null}
              </div>
              <div className="trek-right">
                <div className="trek-owner">
                  <img src={key.user.profile_pic} alt="trek owner" />
                  <span className="trek-username">{key.user.username}</span>
                </div>
                <div className="trek-text-content pt-2 small-text">
                  <span className="trek-text">{key.trek[0].text}</span>
                </div>
              </div>
            </div>
          </article>
        ))}
      </CustomSlider>
    </section>
  );
};

const mapStateToProps = (state) => ({
  treks: state.treksStore.treks
});

const mapDispatchToProps = (dispatch) => ({
  fetchTreks: (treks) => dispatch(fetchTreks(treks))
});

export default connect(mapStateToProps, mapDispatchToProps)(TreksPrev);
