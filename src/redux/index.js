import { combineReducers } from 'redux';
import navigation from './navigation/reducer.js';
import enquiries from './enquiries/reducer.js';

export default combineReducers({
    navigation,
    enquiries
});
