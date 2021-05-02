import {
    UPDATE_PERSON_PROPERTIES,
    ERROR
} from './formConstants'

export function updatePersonProperties(data) {
    return {
        type: UPDATE_PERSON_PROPERTIES,
        payload: data
    };
}

export function handleError(error) {
    return {
        type: ERROR,
        payload: error
    };
}
