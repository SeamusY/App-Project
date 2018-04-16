import { createStore, combineReducers, applyMiddleware } from 'redux';

import number_reducer from './reducers/number';
import thunk from 'redux-thunk';
const rootReducer = combineReducers({
    numbers: number_reducer
    });
    
const configStore = () => {
    return createStore(rootReducer, applyMiddleware(thunk))
}

export default configStore;