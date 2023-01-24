import { USER_LOGGED_IN, USER_LOGGED_OUT } from "./ascitonsTypes";

export function login(user){
    return{
        type: USER_LOGGED_IN,
        payload: user
    }
}

export function logout(user){
    return{
        type: USER_LOGGED_OUT
    }
}