import {
    PEOPLE_FETCH_ALL,
    PEOPLE_FETCH_ONE,
    ERROR
} from './peopleConstants'

const initialState = {
    loading: true
    
}
export const peopleReducer = (state = initialState, { type, payload }) => {

    switch (type) {
        case PEOPLE_FETCH_ALL:
            return {
                ...state,
                loading: false,
                people: payload.map(value => value.title)
            }
            case PEOPLE_FETCH_ONE:
            return {
                ...state,
                loading: false,
                people: payload.title
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