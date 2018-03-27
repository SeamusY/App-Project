import { createStore, combineReducers } from 'redux';

import reducer from './reducers/number';

const rootReducer = combineReducers({
    numbers: reducer
})

const configStore = () => {
    return createStore(rootReducer)
}

export default configStore;