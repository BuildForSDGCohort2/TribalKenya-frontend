const initialState = {
  recentTreks: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'fetch_recent_treks':
      return {
        ...state,
        recentTreks: action.recentTreks
      };
    default:
      return state;
  }
};
