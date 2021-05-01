export const PEOPLE_FETCH_ALL = "PEOPLE_FETCH_ALL"
export const ERROR = "ERROR"

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
