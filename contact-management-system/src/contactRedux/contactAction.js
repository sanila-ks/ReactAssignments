
export const AddAction = (user)=>{
    console.log(user)
    return{
        type: 'PUT_USER_INFO',
        payload: user
    }
}

export const GetAction = () =>{
    return{
        type:'GET_USER'
    }
}

export const DeleteAction = (userID) =>{
    return{
        type:'DELETE_USER',
        payload: userID
    }
}

export const UpdateAction = (props) =>{
    return{
            type:'UPDATE_USER',
            payload:props
    }
}

