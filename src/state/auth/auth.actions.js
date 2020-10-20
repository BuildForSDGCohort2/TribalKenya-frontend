import firebase from 'gatsby-plugin-firebase';

export const checkUser = (user) => ({
  type: 'check_user', user
});

export const addMessage = (message, success) => ({
  type: 'message', message: message, success: success
});

export const addProfile = (profile) => ({
  type: 'profile', profile
});

export const checkPageLoading = (pageLoading) => ({
  type: 'page_loading', pageLoading
});

export const addImageToStorage = (folder, image) => {
  return async () => {
    try {
      const storageRef = firebase.storage().ref();
      const addImage = storageRef.child(`${folder}/${image.name}`);
      await addImage.put(image, { contentType: image.type });
      const imageUrl = await addImage.getDownloadURL();
      return imageUrl;
    } catch (error) {
      return error.message;
    }
  };
};

export const updateProfile = (updates, userId) => {
  return async () => {
    try {
      const headers = new Headers();
      headers.append('Content-Type', 'application/json');
      const options = { method: 'PUT', headers, body: JSON.stringify(updates) };
      const request = new Request(`https://us-central1-tribalkenya-ff470.cloudfunctions.net/auth/profile-details/update/${userId}`, options);
      await fetch(request);
    } catch (error) {
      console.log(error.message);
    }
  };
};
