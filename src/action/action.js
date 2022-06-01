import axios from "axios"
import * as types from '../action/actionType';

export const getUsers=(users)=>{
    return{
        type:types.GET_USERS,
        payload:users,
    }
}

export const deletedUser=()=>{
    return{
        type:types.DELETE_USERS,
    }
}
export const addedUser=()=>{
    return{
        type:types.ADD_USERS,
    }
}
export const updatedUser=(user)=>{
    return{
        type:types.EDIT_USERS,
        payload:user,
    }
}
export const updatedDetails=()=>{
    return{
        type:types.UPDATE_USER_DETAILS,
    }
}

export const loadUsers=()=>{
    return function (dispatch){
        axios.get(`${process.env.REACT_APP_API}`)
        .then((response)=>{
            // console.log('ResponseData',response);
            dispatch(getUsers(response.data));
        })
        .catch((error)=>console.log(error));
    }
}
export const deleteUsers=(id)=>{
    return function (dispatch){
        axios.delete(`${process.env.REACT_APP_API}/${id}`)
        .then((response)=>{
            // console.log('ResponseData',response);
            dispatch(deletedUser());
            dispatch(loadUsers());
        })
        .catch((error)=>console.log(error));
    }
}
export const addUsers=(ADDuser)=>{
    return function (dispatch){
        axios.post(`${process.env.REACT_APP_API}`,ADDuser)
        .then((response)=>{
            // console.log('ResponseData',response);
            dispatch(addedUser());
            // dispatch(loadUsers());
        })
        .catch((error)=>console.log(error));
    }
}
export const updateUsers=(id)=>{
    return function (dispatch){
        axios.get(`${process.env.REACT_APP_API}/${id}`)
        .then((response)=>{
            // console.log('ResponseData',response);
            dispatch(updatedUser(response));
            // dispatch(loadUsers());
        })
        .catch((error)=>console.log(error));
    }
}
export const updatedUserDetails=(user,id)=>{
    return function (dispatch){
        axios.put(`${process.env.REACT_APP_API}/${id}`,user)
        .then((response)=>{
            // console.log('ResponseData',response);
            dispatch(updatedDetails());
            // dispatch(loadUsers());
        })
        .catch((error)=>console.log(error));
    }
}