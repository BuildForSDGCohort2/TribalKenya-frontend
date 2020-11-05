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
