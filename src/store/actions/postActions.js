import api from "../../services/axios"
import { ADD_COMMENT, ADD_POST } from "./actionsTypes"

export function addPost(post){
    return dispatch => {
        api.post('/posts.json', {
            ...post
        })
        .catch(err => console.log(err))
        .then(res => console.log(res.data))
    }
    /* return {
        type: ADD_POST,
        payload: post
    } */
}

export function addComment(payload){
    return {
        type: ADD_COMMENT,
        payload: payload
    }
}