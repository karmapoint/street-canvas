/**
 * Root Reducer
 */
import { combineReducers } from 'redux';

// Import Reducers
import app from './modules/App/AppReducer';
import posts from './modules/Post/PostReducer';
import session from './modules/Session/session_reducer';

// Combine all reducers into one root reducer
export default combineReducers({
  app,
  posts,
  session,
});
