import axios from 'axios';
import {
    USER_LOADED,
    USER_LOADING,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT_SUCCESS,
    REGISTER_FAIL,
    REGISTER_SUCCESS,
    RESET_SUCCESS,
    RESET_FAIL
} from './types'

// Check the token and load user
export const loadUser = () => (dispatch, getState) => {

     // User loading
     dispatch({ type: USER_LOADING });

     // Get token from state
     const token = getState().auth.token;
 
     // Headers
     const config = {
         headers: {
             'Content-Type': 'application/json'
         }
     }

     // If token add to headers config
     if(token) {
         config.headers['Authorization'] = `Token ${token}`;
     }
 
    axios
        .get('https://bank-backend-deidra.herokuapp.com/auth/users/', config)
        .then(res => {
            dispatch ({
                type: USER_LOADED,
                payload : res.data
            })
            // dispatch({
            //     type: 'GET_AUTH_LEVEL',
            //     payload: getAuthLevel(res.data.groups[0])
            // })
        })
        .catch (err => {
            console.log(err)
            dispatch({
                type: AUTH_ERROR
            });
        });
};

// LOGIN USER
export const login = (username, password) => dispatch => {
    //Headers
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    //Request body
    const body = JSON.stringify({username,password})


    axios.post('https://bank-backend-deidra.herokuapp.com/auth/login', body, config)
        .then(res => {
            dispatch({
                type: LOGIN_SUCCESS,
                payload: res.data
            })
        })
        .catch(err => {
            dispatch({
                type: LOGIN_FAIL
            })
            // alert(err.response.data.non_field_errors);
        })

}
//REGISTER USER
export const register = ({username, password, email, groups }) => dispatch => {

    //Headers
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    //Request body

    const body = JSON.stringify({username,password, email,groups})

    axios.post('https://bank-backend-deidra.herokuapp.com/auth/register', body, config)

        .then(res => {
            dispatch({
                type: REGISTER_SUCCESS,
                payload: res.data
            })
        })
        .catch(err => {
            dispatch({
                type: REGISTER_FAIL
            })
            alert(err.response.data.non_field_errors);
        })

}
// LOGOUT USER
export const logout = () => (dispatch, getState) => {


    axios.post('https://bank-backend-deidra.herokuapp.com/auth/logout',null, tokenConfig(getState))
        .then(res => {
            dispatch ({
                type: LOGOUT_SUCCESS,
                payload : res.data
            })
        }).catch (err => {
            console.log(err)
            
        })
}

// Password Reset
export const reset = (username, password) => dispatch => {
    // Headers
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    // Request Body 
    const body = JSON.stringify({ username, password });

    axios
      .put('https://bank-backend-deidra.herokuapp.com/auth/passwords', body, config)
      .then(res => {
          dispatch({
            type: RESET_SUCCESS,
            payload: res.data
          });
          alert("Password successfully reset. Please login with new password.")
      })
      .catch(err => {
          dispatch({
              type: RESET_FAIL
          });
          alert("Username not found");
      });
};

// setup config with token -helper function 
export const tokenConfig = getState =>{
      //get token from state
      const token = getState().auth.token
      //headers
      const config = {
          headers: {
              'Content-Type':'application/json'
          }
      }
      // If token, add to headers config
      if(token) {
          config.headers['Authorization'] = `Token ${token}` ;
      }
      return config
}

// export const getAuthLevel = groupName => {
//     switch (groupName.name){
//         case 'Member':
//             return 3;
//         case 'Branch Admin':
//             return 2;
//         case 'Branch Staff':
//             return 1;
//     }
// }