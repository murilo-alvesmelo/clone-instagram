import { ADD_POST } from "./actionsTypes";

export function addPost(post){
    return {
        type: ADD_POST,
        payload: post
    }
}