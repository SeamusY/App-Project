import { createStore, combineReducers } from 'redux';

import number_reducer from './reducers/number';

const rootReducer = combineReducers({
    numbers: number_reducer
    });
    
const configStore = () => {
    return createStore(rootReducer)
}

export default configStore;