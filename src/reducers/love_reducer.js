import { LOVE, UNLOVE } from '../actions';

export default function reducer(state = {
    favs:[],
    isfetched: false
 }, action) {
    switch (action.type) {      
        case LOVE:
            return {favs: [...state.favs, action.payload], isfetched: true}
        case UNLOVE:
            return {favs: [...state.favs.filter( (item) => item !== action.payload)], isfetched: true}
        default:
            return state;
    }
};