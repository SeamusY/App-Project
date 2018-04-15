import { setname, setemail, setjwtToken, setid } from '../actions/actionTypes'

const initialState = {
    name: null,
    email: null,
    jwtToken: null,
    id: 0
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case setname:
            return {
                ...state,
                name: state.name
            }
        case setemail:
                return {
                    ...state,
                    email: state.email
                }
        case setjwtToken:
            return {
                ...state,
                jwtToken: state.jwtToken
        }
        case setid:
            return {
                ...state,
                id: state.id
        }
        default:
            return state
    }
};

export default reducer