import { USER_LOGGED_IN, USER_LOGGED_OUT } from "./actionsTypes";

export function login(user){
    return{
        type: USER_LOGGED_IN,
        payload: user
    }
}

export function logout(){
    return{
        type: USER_LOGGED_OUT
    }
}