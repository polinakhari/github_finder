import React, {useReducer} from 'react'
import {ALERT, REMOVEALERT} from '../types'
import alertReducer from "./alertReducer"
import alertContext from './alertContext'


const AlertState = props => {
    const initialState = null;
  
    const [state, dispatch] = useReducer(alertReducer, initialState);
  
    // Set Alert
    const setAlert = (msg, type) => {
      dispatch({
        type: ALERT,
        payload: { msg, type }
      });
  
      setTimeout(() => dispatch({ type: REMOVEALERT }), 5000);
    };
  
    return (
      <alertContext.Provider
        value={{
          alert: state,
          setAlert
        }}
      >
        {props.children}
      </alertContext.Provider>
    );
  };
  
  export default AlertState;