import { combineReducers } from 'redux';
import catalog from './catalog_reducer';
import sorting from './sorting_reducer';
import love from './love_reducer';
import modal from './modal_reducer';

const rootReducer = combineReducers({
  catalog,
  sorting,
  love,
  modal
});

export default rootReducer;
