const initialState = {
  previewSites: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'add_preview_sites':
      return {
        ...state,
        previewSites: action.previewSites
      };
    default:
      return state;
  }
};
