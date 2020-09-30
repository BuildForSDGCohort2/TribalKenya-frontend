const initialState = {
  previewSites: [],
  siteCategories: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'add_preview_sites':
      return {
        ...state,
        previewSites: action.previewSites
      };
    case 'add_categories':
      return {
        ...state,
        siteCategories: action.siteCategories
      };
    default:
      return state;
  }
};
