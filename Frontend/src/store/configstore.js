import { createStore, combineReducers } from 'redux';

import number_reducer from './reducers/number';

const rootReducer = combineReducers({
    numbers: number_reducer,
    // email: email_reducer,
    // name: name_reducer,
    // access_token: token,
    // isDateTimePickerVisible: false,
    // Authroizer: false
    });
    
const configStore = () => {
    return createStore(rootReducer)
}

export default configStore;