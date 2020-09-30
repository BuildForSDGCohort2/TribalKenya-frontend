export const addpreviewSites = (previewSites) => ({
  type: 'add_preview_sites', previewSites
});

export const addCategories = (siteCategories) => ({
  type: 'add_categories', siteCategories
});

export const checkLoading = (loading) => ({
  type: 'loading', loading
});
