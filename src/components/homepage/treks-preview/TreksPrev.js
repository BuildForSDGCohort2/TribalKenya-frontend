import React from 'react';
import trek1 from '../../../images/trek-1.jpg';
import adventure from '../../../images/adventure.svg';
import CustomSlider from '../../slider/CustomSlider';
import TextContent from '../../TextContent';

const TreksPrev = () => {
  const styles = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    pauseOnHover: false,
    autoplay: true,
    autoplaySpeed: 2000,
    vertical: true
  };
  return (
        <section className="treks-prev-sec">
            <TextContent heading="Recent Treks" textColor="c-cream text-center" />
            <CustomSlider customStyles={styles} nextAndPrev={true} >
            <article className="p-2">
                <div className="trek">
                    <div className="trek-left">
                        <img src={trek1} alt="trek preview"/>
                    </div>
                    <div className="trek-right">
                        <div className="trek-owner">
                            <img src={adventure} alt="trek owner"/>
                            <span className="trek-username">Username</span>
                        </div>
                        <div className="trek-text-content pt-2 small-text">
                            <span className="trek-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi possimus corporis consectetur rerum incidunt dolore id dolorum quo ab qui!</span>
                        </div>
                    </div>
                </div>
            </article>
            <article className="p-2">
                <div className="trek">
                    <div className="trek-left">
                        <img src={trek1} alt="trek preview"/>
                    </div>
                    <div className="trek-right">
                        <div className="trek-owner">
                            <img src={adventure} alt="trek owner"/>
                            <span className="trek-username">Username</span>
                        </div>
                        <div className="trek-text-content pt-2 small-text">
                            <span className="trek-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi possimus corporis consectetur rerum incidunt dolore id dolorum quo ab qui!</span>
                        </div>
                    </div>
                </div>
            </article>
            <article className="p-2">
                <div className="trek">
                    <div className="trek-left">
                        <img src={trek1} alt="trek preview"/>
                    </div>
                    <div className="trek-right">
                        <div className="trek-owner">
                            <img src={adventure} alt="trek owner"/>
                            <span className="trek-username">Username</span>
                        </div>
                        <div className="trek-text-content pt-2 small-text">
                            <span className="trek-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi possimus corporis consectetur rerum incidunt dolore id dolorum quo ab qui!</span>
                        </div>
                    </div>
                </div>
            </article>
            <article className="p-2">
                <div className="trek">
                    <div className="trek-left">
                        <img src={trek1} alt="trek preview"/>
                    </div>
                    <div className="trek-right">
                        <div className="trek-owner">
                            <img src={adventure} alt="trek owner"/>
                            <span className="trek-username">Username</span>
                        </div>
                        <div className="trek-text-content pt-2 small-text">
                            <span className="trek-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi possimus corporis consectetur rerum incidunt dolore id dolorum quo ab qui!</span>
                        </div>
                    </div>
                </div>
            </article>
            <article className="p-2">
                <div className="trek">
                    <div className="trek-left">
                        <img src={trek1} alt="trek preview"/>
                    </div>
                    <div className="trek-right">
                        <div className="trek-owner">
                            <img src={adventure} alt="trek owner"/>
                            <span className="trek-username">Username</span>
                        </div>
                        <div className="trek-text-content pt-2 small-text">
                            <span className="trek-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi possimus corporis consectetur rerum incidunt dolore id dolorum quo ab qui!</span>
                        </div>
                    </div>
                </div>
            </article>
            <article className="p-2">
                <div className="trek">
                    <div className="trek-left">
                        <img src={trek1} alt="trek preview"/>
                    </div>
                    <div className="trek-right">
                        <div className="trek-owner">
                            <img src={adventure} alt="trek owner"/>
                            <span className="trek-username">Username</span>
                        </div>
                        <div className="trek-text-content pt-2 small-text">
                            <span className="trek-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi possimus corporis consectetur rerum incidunt dolore id dolorum quo ab qui!</span>
                        </div>
                    </div>
                </div>
            </article>
            <article className="p-2">
                <div className="trek">
                    <div className="trek-left">
                        <img src={trek1} alt="trek preview"/>
                    </div>
                    <div className="trek-right">
                        <div className="trek-owner">
                            <img src={adventure} alt="trek owner"/>
                            <span className="trek-username">Username</span>
                        </div>
                        <div className="trek-text-content pt-2 small-text">
                            <span className="trek-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi possimus corporis consectetur rerum incidunt dolore id dolorum quo ab qui!</span>
                        </div>
                    </div>
                </div>
            </article>
            <article className="p-2">
                <div className="trek">
                    <div className="trek-left">
                        <img src={trek1} alt="trek preview"/>
                    </div>
                    <div className="trek-right">
                        <div className="trek-owner">
                            <img src={adventure} alt="trek owner"/>
                            <span className="trek-username">Username</span>
                        </div>
                        <div className="trek-text-content pt-2 small-text">
                            <span className="trek-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi possimus corporis consectetur rerum incidunt dolore id dolorum quo ab qui!</span>
                        </div>
                    </div>
                </div>
            </article>
            </CustomSlider>

        </section>
  );
};

export default TreksPrev;
