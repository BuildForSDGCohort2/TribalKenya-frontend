import firebase from 'gatsby-plugin-firebase';

export const db = firebase.firestore();

// Add a trek
export const addTrekEndpoint = async (trek) => {
  try {
    const newItem = { ...trek };
    const result = await db.collection('treks').add({ ...newItem });
    return result.id;
  } catch (error) {
    return error.message;
  }
};

// Get private treks
export const getPrivateTreksEndpoint = async (profileId) => {
  try {
    const results = [];
    const treks = await db.collection('treks').where('profileId', '==', profileId).where('privacy', '==', 'private').orderBy('date_posted', 'desc')
      .get();
    treks.forEach((key) => {
      const data = key.data();
      results.push({ ...data, id: key.id });
    });
    return results;
  } catch (error) {
    return error.message;
  }
};

// Get limited treks
export const getLimitedTreksEndpoint = async (limit) => {
  try {
    const results = [];
    const treks = await db.collection('treks').where('privacy', '==', 'public').orderBy('date_posted', 'desc').limit(limit)
      .get();
    treks.forEach((key) => {
      const data = key.data();
      results.push({ ...data, id: key.id });
    });
    return results;
  } catch (error) {
    return error.message;
  }
};

// Get public treks
export const getPublicTreksEndpoint = async () => {
  try {
    const results = [];
    const treks = await db.collection('treks').where('privacy', '==', 'public').orderBy('date_posted', 'desc').get();
    treks.forEach((key) => {
      const data = key.data();
      results.push({ ...data, id: key.id });
    });
    return results;
  } catch (error) {
    return error.message;
  }
};

// Get my treks
export const getMyTreksEndpoint = async (profileId) => {
  try {
    const results = [];
    const treks = await db.collection('treks').where('profileId', '==', profileId).orderBy('date_posted', 'desc').get();
    treks.forEach((key) => {
      const data = key.data();
      results.push({ ...data, id: key.id });
    });
    return results;
  } catch (error) {
    return error.message;
  }
};

// Get treks that are in the same category
export const getCategoryTreks = async (category) => {
  try {
    const results = [];
    const capitalizeFirstLetter = (string) => string.charAt(0).toUpperCase() + string.slice(1);
    const treks = await db.collection('treks').where('privacy', '==', 'public').where('category', '==', capitalizeFirstLetter(category)).orderBy('date_posted', 'desc')
      .get();
    treks.forEach((key) => {
      const data = key.data();
      results.push({ ...data, id: key.id });
    });
    return results;
  } catch (error) {
    return error.message;
  }
};
