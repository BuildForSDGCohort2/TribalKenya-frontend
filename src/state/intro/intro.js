const initialState = {
  showVideo: false
};

// Actions
export const toggleVideo = (showVideo) => ({
  type: 'show_video', showVideo
});

// Reducer
export default (state = initialState, action) => {
  switch (action.type) {
    case 'show_video':
      return { ...state, showVideo: action.showVideo };
    default:
      return state;
  }
};
