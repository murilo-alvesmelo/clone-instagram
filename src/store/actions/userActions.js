import axios from "axios";
import { USER_LOGGED_IN, USER_LOGGED_OUT } from "./actionsTypes";

const authBaseURL = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty'
const API_KEY = 'AIzaSyD5t5Ie1vfLz8QbsrFmLmK7D_sbRoADfso'

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

export const createUser = user =>{
    return dispatch => {
        axios.post(`${authBaseURL}/signupNewUser?key=${API_KEY}`, {
            email: user.email,
            password: user.password,
            returnSecureToken: true
        })
            .catch(err => console.log(err))
            .then(res => {
                if(res.data.localId){
                    axios.put(`/users/${res.data.localId}.json`, {
                        name: user.name
                    })
                        .catch(err =>  console.log(err))
                        .then(res => {
                            console.log("Usuario criado com sucesso")
                        })
                }
            })
    }
}