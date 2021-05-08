import {
    UPDATE_PERSON_PROPERTIES,
    ERROR
} from './formConstants'

const initialState = {
    person: {}
}

export const formReducer = (state = initialState, { type, payload }) => {

    switch (type) {
        case UPDATE_PERSON_PROPERTIES:
            return {
                ...state,
                person: {...payload}
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