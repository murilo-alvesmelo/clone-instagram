import { ADD_POST } from "../actions/actionsTypes";

 const initialState = {
    posts: [{
        id: Math.random(),
        nickname: 'murilo_am',
        email: 'murilo.melo72@gmail.com',
        image: require('../../../assets/imgs/fence.jpg'),
        comments:[{
            nickname: 'Tales',
            comment: 'Top dms'
        },{
            nickname: 'Tito',
            comment: 'Show!'
        }]
    },{
        id: Math.random(),
        nickname: 'talesmelquiades',
        email: 'talesmelquiades@hotmail.com',
        image: require('../../../assets/imgs/bw.jpg'),
        comments:[{
            nickname: 'wtito',
            comment: 'supera neguuuu'
        }]
    },{
        id: Math.random(),
        nickname: 'wtito',
        email: 'wedertito8@gmail.com',
        image: require('../../../assets/imgs/gate.jpg'),
        comments:[{
            nickname: 'murilo_am',
            comment: 'Zika!'
        }]
    }]
 }

 const reducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_POST:
            return {
                ...state,
                posts: state.posts.concat({
                    ...action.payload
                })
            }
        default:
            return state
    }
 }

 export default reducer