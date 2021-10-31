import { combineReducers } from 'redux';
import restaurants from './restaurant';
import reviews from './review';

export default combineReducers({
  restaurants,
  reviews
});
