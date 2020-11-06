import firebase from 'gatsby-plugin-firebase';

const db = firebase.firestore();

// Get user profile
export const getProfileEndpoint = async (userid) => {
  try {
    const userProfile = await db.collection('profile').doc(userid).get();
    const profile = userProfile.data();
    return profile;
  } catch (error) {
    return 500;
  }
};

// Create new user
export const createUserEndpoint = async (user) => {
  try {
    const userData = {
      id: user.id,
      email: user.email,
      username: user.username,
      phoneNumber: user.phone,
      photoURL: user.profile_pic,
      location: '',
      bio: '',
      work: '',
      interests: ''
    };
    await db.collection('profile').doc(userData.id).set(userData);
    return 'Signed up';
  } catch (error) {
    console.log(error);
    return error.message;
  }
};

// Confirm if a username exists
export const confirmUsernameExists = async (username) => {
  try {
    const query = await db.collection('profile').where('username', '==', username).get();
    let result = false;
    query.forEach((doc) => {
      if (doc.exists) {
        result = true;
      }
    });
    return result;
  } catch (error) {
    return error.message;
  }
};
