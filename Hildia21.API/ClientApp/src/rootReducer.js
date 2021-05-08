import { combineReducers } from "redux";
import {peopleReducer} from './pages/peoplePage/peopleReducer'


const rootReducer = combineReducers({
    peopleReducer
})

export default rootReducer;