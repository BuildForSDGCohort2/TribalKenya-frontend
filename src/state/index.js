import { combineReducers } from 'redux';
import intro from './intro/intro';
import introSlider from './intro/introSlider';

export default combineReducers({
  intro: intro,
  introSlider: introSlider
});
