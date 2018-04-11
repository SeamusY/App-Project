import { setemail, setname, setjwtToken, setid } from './actionTypes'

export const setemail = () => {
    return{
    type: setemail
    }
}
export const setname = () => {
    return{
    type: setname
    }
}
export const settoken = () => {
    return{
    type: setjwtToken
    }
}
export const setid = () => {
    return{
    type: setid
    }
}