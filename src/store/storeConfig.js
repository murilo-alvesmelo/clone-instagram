import { createStore, combineReducers} from 'redux'
import userReducer from './reducers/userReducers'
import postsReducer from './reducers/postsReducers'

 const reducer = combineReducers({
    user: userReducer,
    posts: postsReducer
 })

 const storeConfig = () =>{
    return createStore(reducer)
 }

 export default storeConfig

