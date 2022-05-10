
import { createSlice , createAsyncThunk } from "@reduxjs/toolkit"

export const setAlert  = createAsyncThunk('SetAlert',async ([msg,alertType],ThunkApi)=>{
    return {msg , alertType}
})


const initialState = {msg:null , alertType:null}


export const alertSlice = createSlice({
    name: 'alert',
    initialState,
    extraReducers:{
        [setAlert.fulfilled]:(state,action) =>{
            state.msg = action.payload.msg ;
            state.alertType = action.payload.alertType
        }
    },
})

export default alertSlice.reducer
// const alert = (state = initialState , action) =>{
// const {type,payload} = action ;

// switch(type){
//     case 'SET_ALERT':
//         return [...state,payload];
//     case 'REMOVE_ALERT':
//         return state.filter(alert => alert.id !== payload);

//         default:

//         return state
// }
// }

// export default alert