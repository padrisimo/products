import { combineReducers } from 'redux';
import catalog from './catalog_reducer';
import sorting from './sorting_reducer';
import love from './love_reducer';

const rootReducer = combineReducers({
  catalog,
  sorting,
  love
});

export default rootReducer;
