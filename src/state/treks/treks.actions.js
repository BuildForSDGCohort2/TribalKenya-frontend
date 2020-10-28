import { treksData } from './treksData';

export const addTreks = (recentTreks) => ({
  type: 'fetch_recent_treks', recentTreks
});

export const sortByDate = (data) => {
  return () => data.sort((first, second) => new Date(second.date_posted) - new Date(first.date_posted));
};

export const fetchRecentTreks = () => {
  return (dispatch) => {
    const sortedTreks = dispatch(sortByDate(treksData));
    dispatch(addTreks(sortedTreks));
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

/*
 * export const addNewTrek = (trek) => {
 *   return (dispatch) => {
 *     const newTrek = {
 *       ...trek,
 *       date_posted: new Date(Date.now()),
 *       comments: [],
 *       reports: [],
 *       reposts: []
 *     };
 *     dispatch(addTreks())
 *   };
 * };
 */
