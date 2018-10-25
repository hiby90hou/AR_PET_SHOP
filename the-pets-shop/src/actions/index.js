import { ADD_APPLE } from "../constants/action-types";

// {
//   type: 'ADD_APPLE',
//   payload: { name: 'one apple', id:1}
// }


export const addApple = apple =>({type: ADD_APPLE});
