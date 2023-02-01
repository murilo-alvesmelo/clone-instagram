import axios from "axios"
import { ADD_COMMENT, ADD_POST } from "./actionsTypes"
import api from "../../services/axios"

export function addPost(post){
    return dispatch => {
        /* axios({
            url: 'uploadImage',
            baseURL: 'https://us-central1-insta-clone-d0c22.cloudfunctions.net',
            method: 'post',
            data: {
                image: post.image.base64
            }
        })
            .catch(err => console.log(err))
            .then(res => {
                
                post.image = res.data.imageUrl
            }) */
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