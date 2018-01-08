import { FETCH_CATALOG } from '../actions';

export default function reducer(state = {
    catalog:{},
    isfetched: false
 }, action) {
    switch (action.type) {      
        case FETCH_CATALOG:
            return { items: action.payload.data.items, isfetched: true}
        default:
            return state;
    }
};