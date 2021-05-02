import { combineReducers } from "redux";
import {peopleReducer} from './pages/peoplePage/peopleReducer'
import {formReducer} from './pages/formPage/formReducer'

const rootReducer = combineReducers({
    peopleReducer,
    formReducer
})

export default rootReducer;