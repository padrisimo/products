import axios from 'axios';

export const FETCH_CATALOG = 'FETCH_CATALOG';

const ROOT_URL = 'http://www.mocky.io/v2';

export function fetchCatalog() {
    const request = axios.get(`${ROOT_URL}/5a5109f42f00000e1a8d5341`);

    return {
        type: FETCH_CATALOG,
        payload: request
    };
}