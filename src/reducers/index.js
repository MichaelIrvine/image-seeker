import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

const searchImageReducer = (searchImage = null, action) =>{
  if(action.type === 'SEARCH_IMAGES'){
    return action.payload
  }

  return searchImage;
}


export default combineReducers({
  searchedImages: searchImageReducer,
  form: formReducer
})