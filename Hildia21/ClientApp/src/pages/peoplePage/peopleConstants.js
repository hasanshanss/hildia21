export const PEOPLE_FETCH_ALL = "PEOPLE_FETCH_ALL"
export const PEOPLE_FETCH_ONE = "PEOPLE_FETCH_ONE"
export const ERROR = "ERROR"

export function peopleFetchAll(data) {
    return {
        type: PEOPLE_FETCH_ALL,
        payload: data
    };
}

export function peopleFetchOne(data) {
    return {
        type: PEOPLE_FETCH_ONE,
        payload: data
    };
}


export function handleError(error) {
    return {
        type: ERROR,
        payload: error
    };
}
