const initialState = {
  previewSites: [],
  siteCategories: [],
  loading: false
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
    case 'loading':
      return {
        ...state,
        loading: action.loading
      };
    default:
      return state;
  }
};
