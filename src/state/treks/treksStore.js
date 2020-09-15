const initialState = {
  treks: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'fetch_treks':
      return {
        ...state,
        treks: action.treks
      };
    default:
      return state;
  }
};
