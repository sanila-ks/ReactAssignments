
const initialState = {
    user : [],
    //qualification : [],
    education : [],
    experience : [],
    skills : []
}

const ResumeReducer = (state= initialState, action) => {
console.log('inside reducer....', action.payload)

    if(action.type === 'ADD_USER_INFO'){
        return{
            ...state,
            //user:[...state.user, action.payload],
            user : action.payload,
            type : action.type
        }
    }

    // if(action.type === 'ADD_QUALIFICATION'){
    //     return{
    //         ...state,
    //         qualification:[...state.qualification, action.payload],
    //         //qualification : action.payload,
    //         type : action.type
    //     }
    // }

    if(action.type === 'ADD_EDUCATION'){
        return{
            ...state,
            education:[...state.education, action.payload],
            //qualification : action.payload,
            type : action.type
        }
    }

    if(action.type === 'ADD_EXPERIENCE'){
        return{
            ...state,
            experience:[...state.experience, action.payload],
            //qualification : action.payload,
            type : action.type
        }
    }


    if(action.type === 'ADD_SKILLS'){
        return{
            ...state,
            skills:[...state.skills, action.payload],
            //skills : action.payload,
            type : action.type
        }
    }

    return state
}

export default ResumeReducer
