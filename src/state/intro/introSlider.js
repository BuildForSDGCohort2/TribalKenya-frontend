import navigate from '../../images/navigate.svg';
import adventure from '../../images/adventure.svg';
import memories from '../../images/memories.svg';
import people from '../../images/people.svg';

const initialState = {
  introSlides: [
    { image: adventure, content: 'Get started on your adventure' },
    { image: navigate, content: 'Find and visit popular sites' },
    { image: people, content: 'Meet new people and chat' },
    { image: memories, content: 'Make new memories and share them' }
  ]
};

// Reducers
export default (state = initialState, action) => {
  switch (action.type) {
    case 'add_intro_slides':
      return {
        ...state,
        introSlides: action.introSlides
      };
    default:
      return state;
  }
};
