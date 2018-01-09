import axios from 'axios';

export const FETCH_CATALOG = 'FETCH_CATALOG';
export const SORTING = 'SORTING';
export const LOVE = 'LOVE';
export const UNLOVE = 'UNLOVE';
export const VIEW = 'VIEW';
export const HIDE = 'HIDE';

const ROOT_URL = 'http://www.mocky.io/v2';

export function fetchCatalog() {
    const request = axios.get(`${ROOT_URL}/5a54a7762d0000b9215b1caf`);

    return {
        type: FETCH_CATALOG,
        payload: request
    };
}

export function sortingCatalog(key) {
    return {
        type: SORTING,
        payload: key
    }
}

export function favLove(index){
    return {
        type: LOVE,
        payload: index
    }
}

export function unFav(index){
    return {
        type: UNLOVE,
        payload: index
    }
}

export function showModal() {
    return {
        type: VIEW,
        payload: true
    }
}

export function hideModal() {
    return {
        type: HIDE,
        payload: false
    }
}
