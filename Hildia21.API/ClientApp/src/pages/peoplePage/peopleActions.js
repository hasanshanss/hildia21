
import {
    PEOPLE_FETCH_ALL,
    ERROR
} from './peopleConstants'


export function peopleFetchAll(data) {
    return {
        type: PEOPLE_FETCH_ALL,
        payload: data
    };
}

export function handleError(error) {
    return {
        type: ERROR,
        payload: error
    };
}
