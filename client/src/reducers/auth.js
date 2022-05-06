
import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    token:localStorage.getItem('token'),
    isAuthenticated : false,
    loading:true
}


export const authSlice = createSlice({
    name: 'Signup',
    initialState,
    reducers:[]
})

export default authSlice.reducer

// export const Signup = (state = initialState , action) =>{

//     const {type , payload} = action ;

//     switch(type){
//         case 'REGISTER_SUCCESS':
//         localStorage.setItem('token',payload.token);
//         return{
//             ...state,...payload,isAuthenticated:true,loading:false
//         }
//         case 'REGISTER_FAIL':
//             localStorage.removeItem('token')
//             return{
//                 ...state,
//                 token:null,
//                 isAuthenticated:false,
//                 loading:false
//             }
//         default:
//             return state ;
//     }

// }