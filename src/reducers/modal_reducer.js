import { VIEW, HIDE } from '../actions';

export default function reducer(state = {
    visible: false,
    isfetched: false
 }, action) {
    switch (action.type) {      
        case VIEW:
            return {...state, visible: true, isfetched: true}
        case HIDE:
            return {...state, visible: false, isfetched: true}
        default:
            return state;
    }
};