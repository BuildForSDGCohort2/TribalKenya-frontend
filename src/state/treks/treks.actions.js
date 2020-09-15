export const fetchTreks = (treks) => ({
  type: 'fetch_treks', treks
});

export const showTrekLikes = (trekLikes) => ({
  type: 'show_trek_likes', trekLikes
});

export const showTrekComments = (trekComments) => ({
  type: 'show_trek_comments', trekComments
});

export const showTrekReposts = (trekReposts) => ({
  type: 'show_trek_reposts', trekReposts
});
