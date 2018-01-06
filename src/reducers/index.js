import { combineReducers } from 'redux';
import catalog from './catalog_reducer';

const rootReducer = combineReducers({
  catalog
});

export default rootReducer;
