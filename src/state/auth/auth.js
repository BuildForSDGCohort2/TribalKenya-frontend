const initialState = {
  user: {},
  message: '',
  success: false
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
    default:
      return state;
  }
};
