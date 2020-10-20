export const addpreviewSites = (previewSites) => ({
  type: 'add_preview_sites', previewSites
});

export const addCategories = (siteCategories) => ({
  type: 'add_categories', siteCategories
});

export const checkLoading = (loading) => ({
  type: 'loading', loading
});

export const getCategories = () => {
  return async (dispatch) => {
    try {
      dispatch(checkLoading(true));
      const response = await fetch('https://us-central1-tribalkenya-ff470.cloudfunctions.net/categories/');
      const results = await response.json();
      dispatch(addCategories(results));
      dispatch(checkLoading(false));
      return results;
    } catch (error) {
      console.log(error.message);
      return error.message;
    }
  };
};

export const addToLocalStorage = (category, load, stopLoad) => {
  return async () => {
    try {
      load();
      localStorage.setItem('category', JSON.stringify(category));
      // Fetch all site/places related to selected category
      const response = await fetch(`https://us-central1-tribalkenya-ff470.cloudfunctions.net/places/${category.id}`);
      const results = await response.json();
      localStorage.setItem('places', JSON.stringify(results));
      stopLoad();
    } catch (error) {
      console.log(error.message);
    }
  };
};
