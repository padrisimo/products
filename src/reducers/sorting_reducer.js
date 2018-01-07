import { SORTING } from '../actions';

export default function reducer(state = {
    sortkey:'',
    isfetched: false
 }, action) {
    switch (action.type) {      
        case SORTING:
            return {sortkey: action.payload, isfetched: true}
        default:
            return state;
    }
};