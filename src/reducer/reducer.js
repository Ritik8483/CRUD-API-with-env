import * as types from '../action/actionType';


const initialState={
   users:[],
   user:{},
   loading:true,
}

export const FETCH_REDUCER=(state=initialState,action)=>{
   switch(action.type){
      case types.GET_USERS : 
      return{
         ...state,
         users:action.payload,
         loading:false,
      };
      break;
      case types.DELETE_USERS : 
      return{
         ...state,
         loading:false,
      };
      break;
      case types.ADD_USERS : 
      break;
      case types.EDIT_USERS : 
      return{
         ...state,
         user:action.payload,
         loading:false,
      };
      break;
      case types.UPDATE_USER_DETAILS : 
      break;
      default:
        return state;
   }

}


// import {getData} from '../action/action'
// import { createSlice } from "@reduxjs/toolkit";
// import axios from "axios";
// import { useDispatch } from "react-redux";
// import user from '../'


// const initailValues={
//    crudValue:[],
// }
// const crudReducer=createSlice({
//    name:'crud',
//    initialState:initailValues,
//    reducers:{
//       getUsers:(state=initailValues,action)=>{
//          console.log('state',initailValues)
//          console.log('Action',action)
//          axios.get(`${process.env.REACT_APP_API}`)
//          .then((response)=>{
//             state.crudValue = action.payload.data;
//             console.log('response',response)
//          })
//          .catch((error)=>console.log(error));
//       }
//    }
// })

// export const { getUsers,} = crudReducer.actions
// export default crudReducer.reducer

// import getData from '../action/action';
