import unsplash from "../apis/Unsplash";


export const searchImages =  (formValues) => {
  return async function(dispatch){
    const response = await unsplash.get("search/photos",{
      params: {
        query: {formValues},
        per_page: 12,
        orientation: 'landscape'
      }
    })

    dispatch({ type: 'SEARCH_IMAGES', payload: response })
  };
};