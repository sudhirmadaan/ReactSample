import { combineReducers } from "redux";
import counterReducer from "./counterReducer";

// const initialState = {
//     counter: 0
// }

// export default function rootReducer(state = initialState, action: { type: string; }) {

//     switch(action.type)
//     {
//         case 'INCREMENT':
//             return {counter : state.counter + 1}
        
//             case 'DECREMENT':
//             return {counter : state.counter - 1}

//             default:
//                 return state;
//     }
// }

const rootReducer = combineReducers({
    counter: counterReducer//,
    //user: userReducer
  });

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>