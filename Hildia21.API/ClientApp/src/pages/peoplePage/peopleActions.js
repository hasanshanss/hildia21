
import {
    PEOPLE_FETCH_ALL,
    ERROR
} from './peopleConstants'
import axios from 'axios'


export const peopleFetchAll = (person) => 

async (dispatch, getState) => {
    console.log(person)    
    try {
        const params =  {...person }
        const response = await axios.get("", {params});

        dispatch({
            type: PEOPLE_FETCH_ALL,
            payload: response.data
        })

    } catch (e) {

        dispatch({
            type: ERROR,
            payload: e
        })
    }
}

