import { combineReducers } from 'redux';

const searchImageReducer = (searchImage = null, action) =>{
  if(action.type === 'SEARCH_IMAGES'){
    return action.payload
  }

  return searchImage;
}


export default combineReducers({
  searchedImages: searchImageReducer
})