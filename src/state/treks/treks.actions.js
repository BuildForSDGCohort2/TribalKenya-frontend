import { treksData } from './treksData';

export const addTreks = (treks) => ({
  type: 'fetch_treks', treks
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
