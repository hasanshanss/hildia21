import axios from 'axios'
import {
    peopleFetchAll,
    peopleFetchOne,
    handleError
} from './peopleConstants'

export const fetchPeople = () =>
    async (dispatch, state) => {

        try {
            const response = await axios.get("https://jsonplaceholder.typicode.com/todos");
            dispatch(peopleFetchAll(response.data));
        } catch (e) {
            dispatch(handleError(e))
        }
    }


export const fetchPeopleOne = (id) =>
    async (dispatch, state) => {

        try {
            const response = await axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`);
            dispatch(peopleFetchOne(response.data));
        } catch (e) {
            dispatch(handleError(e))
        }
    }
