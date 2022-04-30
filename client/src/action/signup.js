
import axios from 'axios'
import setAlert from './setAlert'

const signup = ({ name , eamil , password ,role }) =>async dispatch => {

    const config = {
        headers:{
            Accept:'application/json',
            'Content-Type': 'application/json'
        }
    }
     
    const body = JSON.stringify({name , eamil , password ,role})

    try {
        const res = await axios.post("http://localhost:5000/api/signup" , body , config)
        dispatch({
            type:'REGISTER_SUCCESS',
            payload:res.data
        })
    } catch (error) {
        const errors = error.response.data.errors
        if(errors){
            errors.forEach(error =>dispatch(setAlert(error.msg , 'danger'))
            );
        }
        dispatch({
            type:'REGISTER_FAIL'
        })
    }
}

export default signup ;