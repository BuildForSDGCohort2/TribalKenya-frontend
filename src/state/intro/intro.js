import poster from '../../images/flag2.jpg';

const initialState = {
  showVideo: false,
  introVideo: 'https://firebasestorage.googleapis.com/v0/b/tribalkenya-78cfa.appspot.com/o/extras%2Fintro.mp4?alt=media&token=8f0c07a3-2349-4e25-9afb-4d936644d735',
  introPoster: poster
};

// Reducer
export default (state = initialState, action) => {
  switch (action.type) {
    case 'show_video':
      return { ...state, showVideo: action.showVideo };
    case 'add_video':
      return { ...state, addVideo: action.addVideo };
    default:
      return state;
  }
};
