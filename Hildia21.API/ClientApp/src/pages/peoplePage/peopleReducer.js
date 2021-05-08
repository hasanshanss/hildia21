import {
    PEOPLE_FETCH_ALL,
    ERROR
} from './peopleConstants'

const initialState = {
    loading: true,
}

export const peopleReducer = (state = initialState, { type, payload }) => {

    switch (type) {
        case PEOPLE_FETCH_ALL:
            return {
                ...state,
                loading: false,
                people: payload
            }
        case ERROR:
            return {
                ...state,
                loading: false,
                error: payload
            }

        default:
            return state;
    }

}