import { addImageToStorage } from '../auth/auth.actions';

export const addTreks = (recentTreks) => ({
  type: 'fetch_recent_treks', recentTreks
});

export const sortByDate = (data) => {
  return () => data.sort((first, second) => new Date(second.date_posted) - new Date(first.date_posted));
};

export const fetchRecentTreks = (info, startLoading = () => null, stopLoading = () => null) => {
  return async (dispatch) => {
    try {
      startLoading();
      let response;
      if (info.currentNav === 'recent') {
        info.limit ? response = await fetch(`https://us-central1-tribalkenya-ff470.cloudfunctions.net/treks/limited/${info.limit}`) : response = await fetch('https://us-central1-tribalkenya-ff470.cloudfunctions.net/treks');
      } else {
        response = await fetch(`https://us-central1-tribalkenya-ff470.cloudfunctions.net/treks/private/${info.profile.id}`);
      }
      const results = await response.json();
      dispatch(addTreks(results));
      stopLoading();
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const updateTrekState = (updatedItem, itemToUpdate, listOfItems) => {
  return (dispatch) => {
    const items = [...listOfItems];
    items.splice(items.indexOf(itemToUpdate), 1);
    items.unshift(updatedItem);
    dispatch(addTreks(items));
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
      await fetch(request);
    } catch (error) {
      console.log(error);
    }
  };
};

const getItemsAddedToStorage = (item, arr, info) => {
  return async (dispatch) => {
    try {
      const objectUrl = await dispatch(addImageToStorage(`treks/${info}/`, item));
      arr.push(objectUrl);
      return arr;
    } catch (error) {
      console.log(error);
      return error;
    }
  };
};

// Add trek images and videos to storage
export const addFilesToStorage = (trek) => {
  return async (dispatch) => {
    try {
      const newTrek = { ...trek, images: [], videos: [] };
      await Promise.all(trek.images.map(async (image) => {
        await dispatch(getItemsAddedToStorage(image, newTrek.images, 'images'));
      }));
      await Promise.all(trek.videos.map(async (video) => {
        await dispatch(getItemsAddedToStorage(video, newTrek.videos, 'videos'));
      }));
      return newTrek;
    } catch (error) {
      console.log(error.message);
      return error.message;
    }
  };
};

export const deleteTrek = (docId, trek, treks) => {
  return async (dispatch) => {
    try {
      const currentTreks = [...treks];
      currentTreks.splice(currentTreks.indexOf(trek), 1);
      dispatch(addTreks(currentTreks));
      const headers = new Headers();
      headers.append('Content-Type', 'application/json');
      const options = {
        method: 'DELETE',
        headers,
        body: JSON.stringify(trek)
      };
      const request = new Request(`https://us-central1-tribalkenya-ff470.cloudfunctions.net/treks/delete/${docId}`, options);
      await fetch(request);
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const updateTrek = (docId, trekUpdate, treks) => {
  return async (dispatch) => {
    try {
      const currentTreks = [...treks];
      currentTreks.splice(currentTreks.indexOf(trekUpdate.current), 1, { ...trekUpdate.current, ...trekUpdate.newTrek });
      dispatch(addTreks(currentTreks));
      const headers = new Headers();
      headers.append('Content-Type', 'application/json');
      const options = {
        method: 'PUT',
        headers,
        body: JSON.stringify(trekUpdate.newTrek)
      };
      const request = new Request(`https://us-central1-tribalkenya-ff470.cloudfunctions.net/treks/update/${docId}`, options);
      await fetch(request);
    } catch (error) {
      console.log(error.message);
    }
  };
};
