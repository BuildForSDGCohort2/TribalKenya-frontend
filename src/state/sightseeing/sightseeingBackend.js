import firebase from 'gatsby-plugin-firebase';

export const db = firebase.firestore();

// Get list of categories
export const getCategoriesEndpoint = async () => {
  try {
    const categories = await db.collection('categories').get();
    const results = [];
    categories.forEach((key) => {
      const data = key.data();
      const category = {
        id: key.id,
        ...data
      };
      results.push(category);
    });
    return results;
  } catch (error) {
    return error.message;
  }
};

// Get places/sites in a category
export const getPlacesEndpoint = async (categoryId) => {
  try {
    const places = await db.collection('categories').doc(categoryId).collection('places').get();
    const results = [];
    places.forEach((place) => {
      const data = place.data();
      const getPlace = {
        id: place.id,
        ...data
      };
      results.push(getPlace);
    });
    return results;
  } catch (error) {
    return error.message;
  }
};
