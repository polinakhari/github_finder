import {
    SEARCH_USERS,
    GET_USER,
    GET_REPO,
    SETLOAD,
    CLEAR
    
  } from '../types';
  
  export default (state, action) => {
    switch (action.type) {
      case SEARCH_USERS:
        return {
          ...state,
          users: action.payload,
          load: false
        };
        case GET_USER:
            return  {
                ...state,
                user: action.payload,
                load: false
            }
        case GET_REPO:
            return{
                ...state,
                res: action.payload,
                load: false

            }
        case SETLOAD:
            return{
                ...state,
                load: true
            }
        case CLEAR:
        return{
            ...state,
            users: []
        }
            

        default:
            return state;
        
    }}
    