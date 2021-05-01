import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import {peopleReducer} from '../pages/peoplePage/peopleReducer'
// import rootReducer from './rootReducer'

export default function configureStore() {
    const store = createStore(peopleReducer,composeWithDevTools(applyMiddleware(thunk)))
    return store;
}