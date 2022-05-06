
import { createSlice } from "@reduxjs/toolkit"

const initialState = []


export const alertSlice = createSlice({
    name: 'alert',
    initialState,
    reducers:[]
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