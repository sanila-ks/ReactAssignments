
const initialState = {
    user : [],
    type : ""
}

const ContactReducer = (state=initialState, action) =>{
    console.log('inside contact reducer',state);

    if(action.type === 'GET_USER_INFO_SUCCESS'){
        console.log('inside reducer get');
        return{
            ...state,
            //user:[...state.user, action.getInfo],
            user : action.getInfo,
            type : action.type
        }
    }

    if(action.type === 'PUT_USER_INFO_SUCCESS'){
        return{
            ...state,
            user:[...state.user, action.putInfo],
            type : action.type
        } 
    }

    return state  
}



export default ContactReducer;