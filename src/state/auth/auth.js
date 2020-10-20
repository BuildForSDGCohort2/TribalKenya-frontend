const initialState = {
  user: {},
  message: '',
  success: false,
  profile: {},
  pageLoading: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'check_user':
      return {
        ...state,
        user: action.user
      };
    case 'message':
      return {
        ...state,
        message: action.message,
        success: action.success
      };
    case 'profile':
      return {
        ...state,
        profile: action.profile
      };
    case 'page_loading':
      return {
        ...state,
        pageLoading: action.pageLoading
      };
    default:
      return state;
  }
};
