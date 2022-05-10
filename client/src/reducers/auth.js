
import { createSlice ,createAsyncThunk} from "@reduxjs/toolkit"

import axios from "axios"
import { setAlert } from "./alert"
export const signup  = createAsyncThunk('Signup',async ({ name , email , password ,role },ThunkApi)=>{

    const config = {
        headers:{
            Accept:'application/json',
            'Content-Type': 'application/json'
        }
    }
     
    const body = JSON.stringify({name , email , password ,role})

    const {rejectWithValue , dispatch} = ThunkApi

    try {
        const res = await axios.post("http://localhost:5000/api/signup" , body , config)

        return res.data

    } catch (error) {
        const errors = error.response.data.errors
        if(errors){
            dispatch(setAlert([errors,'danger'])).then(() =>{
              setTimeout(() => {
                dispatch(setAlert(['','']))
              }, 3000);
            })
          return rejectWithValue(errors)
        }

    }

})

const initialState = {
    token:localStorage.getItem('token'),
    isAuthenticated : false,
    loading:true
}


export const authSlice = createSlice({
    name: 'Signup',
    initialState,
    extraReducers:{
        [signup.pending]:(state,action) =>{
            state.loading = true;
            state.isAuthenticated = false
        },
        [signup.fulfilled]:(state,action) =>{
            localStorage.setItem('token',action.payload.token);
            state.loading = false;
            state.isAuthenticated = true
        },
        [signup.rejected]:(state,action) =>{
            state.loading = false;
            state.isAuthenticated = false
            localStorage.removeItem('token');
        },
    }
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