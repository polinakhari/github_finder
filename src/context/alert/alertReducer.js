import {ALERT, REMOVEALERT} from "../types"

export default (state, action) => {
    switch (action.type) {
      case ALERT:
        return {          
          alert: action.payload
        };
        case REMOVEALERT:
                return {          
                  alert: null
                };      
            

        default:
            return state;
        
    }}
    