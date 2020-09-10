import { combineReducers } from 'redux';
import intro from './intro/intro';
import introSlider from './intro/introSlider';
import sightSeeing from './sightseeing/sightseeing';

export default combineReducers({
  intro: intro,
  introSlider: introSlider,
  sightSeeing: sightSeeing
});
