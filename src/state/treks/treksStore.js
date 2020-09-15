const initialState = {
  treks: [],
  trekLikes: false,
  trekComments: false,
  trekReposts: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'fetch_treks':
      return {
        ...state,
        treks: action.treks
      };
    case 'show_trek_likes':
      return {
        ...state,
        trekLikes: action.trekLikes
      };
    case 'show_trek_comments':
      return {
        ...state,
        trekComments: action.trekComments
      };
    case 'show_trek_reposts':
      return {
        ...state,
        trekReposts: action.trekReposts
      };
    default:
      return state;
  }
};
