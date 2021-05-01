import axios from 'axios'
import {
    peopleFetchAll,
    handleError
} from './peopleConstants'

export const getPeople = (person) => 

    async (dispatch, getState) => {
        
        try {
          
            const params = 
            {
               ...person
            }
            const response = await axios.get("", {params});


            dispatch(peopleFetchAll(response.data));
        } catch (e) {
            dispatch(handleError(e))
        }
    }



