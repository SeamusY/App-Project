import { ADD_NUM, MIN_NUM } from '../actions/actionTypes'

const initialState = {
    counter: 0
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_NUM:
        return{
            ...state,
            counter : state.counter+1
        }
        case MIN_NUM:
        return{
            ...state,
            counter: state.counter-1
        }
        default:
        return state
    }

};

export default reducer