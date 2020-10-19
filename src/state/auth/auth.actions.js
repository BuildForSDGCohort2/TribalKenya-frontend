import firebase from 'gatsby-plugin-firebase';

export const checkUser = (user) => ({
  type: 'check_user', user
});

export const addMessage = (message, success) => ({
  type: 'message', message, success
});

export const addProfile = (profile) => ({
  type: 'profile', profile
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
