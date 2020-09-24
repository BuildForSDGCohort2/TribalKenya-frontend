export const checkUser = (user) => ({
  type: 'check_user', user
});

export const addMessage = (message, success) => ({
  type: 'message', message, success
});

export const addProfile = (profile) => ({
  type: 'profile', profile
});
