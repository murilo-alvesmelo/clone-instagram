import { 
   createStore, 
   combineReducers,
   compose,
   applyMiddleware
} from 'redux'
import userReducer from './reducers/userReducers'
import postsReducer from './reducers/postsReducers'
import thunk from 'redux-thunk'

 const reducer = combineReducers({
    user: userReducer,
    posts: postsReducer
 })

 const storeConfig = () =>{
    return createStore(reducer, compose(applyMiddleware(thunk)))
 }

 export default storeConfig

