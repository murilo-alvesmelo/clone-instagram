import axios from "axios";

const api = axios.create({
    baseURL: 'https://insta-clone-d0c22-default-rtdb.firebaseio.com/',
    timeout: 1000,
    headers: {'X-Custom-Header': 'foobar'}
})

export default api;