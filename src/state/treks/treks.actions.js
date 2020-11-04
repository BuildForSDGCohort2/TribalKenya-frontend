import { addImageToStorage } from '../auth/auth.actions';

export const addTreks = (recentTreks) => ({
  type: 'fetch_recent_treks', recentTreks
});

export const sortByDate = (data) => {
  return () => data.sort((first, second) => new Date(second.date_posted) - new Date(first.date_posted));
};

export const fetchRecentTreks = () => {
  return async (dispatch) => {
    try {
      const response = await fetch('https://us-central1-tribalkenya-ff470.cloudfunctions.net/treks');
      const results = await response.json();
      dispatch(addTreks(results));
    } catch (error) {
      console.log(error.message);
    }
  };
};

const createUrlForObject = (obj) => URL.createObjectURL(obj);

export const addTrekToState = (data) => {
  return () => {
    let newData = { ...data };
    const images = [];
    const videos = [];
    newData.images.forEach((image) => images.push(createUrlForObject(image)));
    newData.videos.forEach((video) => videos.push(createUrlForObject(video)));
    newData = { ...data, images: images, videos: videos };
    return newData;
  };
};

export const updateTrekState = (updatedItem, itemToUpdate, listOfItems) => {
  return (dispatch) => {
    const items = [...listOfItems];
    items.splice(items.indexOf(itemToUpdate), 1, updatedItem);
    const sortedItems = dispatch(sortByDate(items));
    dispatch(addTreks(sortedItems));
    console.log(items);
  };
};

export const addTrekToDb = (trek) => {
  return async () => {
    try {
      const headers = new Headers();
      headers.append('Content-Type', 'application/json');
      const options = {
        method: 'POST',
        headers,
        body: JSON.stringify(trek)
      };
      const request = new Request('https://us-central1-tribalkenya-ff470.cloudfunctions.net/treks/add', options);
      const results = await fetch(request);
      console.log(results);
    } catch (error) {
      console.log(error);
    }
  };
};

const getItemsAddedToStorage = (item, arr, info) => {
  return async (dispatch) => {
    try {
      const objectUrl = await dispatch(addImageToStorage(`treks/${info.type}/${info.username}`, item));
      arr.push(objectUrl);
      return arr;
    } catch (error) {
      console.log(error);
      return error;
    }
  };
};

// Add trek images and videos to storage
export const addFilesToStorage = (trek, profile) => {
  return async (dispatch) => {
    try {
      const newTrek = { ...trek, images: [], videos: [] };
      await Promise.all(trek.images.map(async (image) => {
        await dispatch(getItemsAddedToStorage(image, newTrek.images, { type: 'images', username: profile.username }));
      }));
      await Promise.all(trek.videos.map(async (video) => {
        await dispatch(getItemsAddedToStorage(video, newTrek.videos, { type: 'videos', username: profile.username }));
      }));
      return newTrek;
    } catch (error) {
      console.log(error.message);
      return error.message;
    }
  };
};
