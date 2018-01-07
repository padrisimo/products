import { combineReducers } from 'redux';
import catalog from './catalog_reducer';
import sorting from './sorting_reducer';

const rootReducer = combineReducers({
  catalog,
  sorting
});

export default rootReducer;
