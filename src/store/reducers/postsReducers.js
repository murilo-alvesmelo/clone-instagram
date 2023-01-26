import { ADD_COMMENT, ADD_POST } from '../actions/actionsTypes'

 const initialState = {
    posts: [{
        id: Math.random() * 100,
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
        case ADD_COMMENT:
            return{
                ...state,
                posts: state.posts.map(post => {
                    if(post.id === action.payload.postId) {
                        if(post.comments){
                            post.comments = post.comments.concat(
                                action.payload.comment
                            )
                        }else{
                            post.comments = [action.payload.comment]
                        }
                    }
                    return post
                }) 
            }
        default:
            return state
    }
 }

 export default reducer