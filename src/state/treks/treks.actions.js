/* eslint-disable max-statements */
import { addImageToStorage } from '../auth/auth.actions';
import { db, addTrekEndpoint, getPrivateTreksEndpoint, getLimitedTreksEndpoint, getPublicTreksEndpoint, getMyTreksEndpoint, getCategoryTreks } from './treksBackend';

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
        // eslint-disable-next-line radix
        info.limit ? response = await getLimitedTreksEndpoint(parseInt(info.limit)) : response = await getPublicTreksEndpoint();
      } else if (info.currentNav === 'private') {
        response = await getPrivateTreksEndpoint(info.profile.id);
      } else if (info.currentNav === 'my treks') {
        response = await getMyTreksEndpoint(info.profile.id);
      } else {
        response = await getCategoryTreks(info.category);
      }
      if (response !== null) {
        dispatch(addTreks(response));
      }
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
      await addTrekEndpoint(trek);
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
      const request = new Request(`https://us-central1-tribalkenya-78cfa.cloudfunctions.net/treks/delete/${docId}`, options);
      await fetch(request);
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const trekUpdateEndpoint = (docId, newTrek) => {
  return async () => {
    try {
      await db.collection('treks').doc(docId).update(newTrek);
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
      await dispatch(trekUpdateEndpoint(docId, trekUpdate.newTrek));
    } catch (error) {
      console.log(error.message);
    }
  };
};

// Like trek
export const like = (profile, trek, info) => {
  return async (dispatch) => {
    try {
      const { liked, treks } = info;
      const allTreks = [...treks];
      let updatedTrek;
      const myLike = { profileId: profile.id, username: profile.username, profile_pic: profile.photoURL };
      if (!liked) {
        updatedTrek = { ...trek, likes: [...trek.likes, myLike] };
      }
      if (liked) {
        const trekLikes = [...trek.likes];
        trekLikes.splice(trekLikes.indexOf(myLike), 1);
        updatedTrek = { ...trek, likes: [...trekLikes] };
      }
      allTreks.splice(allTreks.indexOf(trek), 1, updatedTrek);
      dispatch(addTreks(allTreks));
      await dispatch(trekUpdateEndpoint(trek.id, { likes: updatedTrek.likes }));
    } catch (error) {
      console.log(error.message);
    }
  };
};
