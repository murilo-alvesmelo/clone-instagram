import { createStore, combineReducers} from 'redux'
import useReducer from './reduncers/userReduncers'

 const reduncers = combineReducers({
    user: useReducer,
 })

 const storeConfig = () =>{
    return createStore(reduncers)
 }

 export default storeConfig

