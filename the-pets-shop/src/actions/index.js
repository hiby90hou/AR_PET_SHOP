import { ADD_APPLE, REMOVE_APPLE } from "../constants/action-types";

// {
//   type: 'ADD_APPLE',
//   payload: { name: 'one apple', id:1}
// }


export const addApple = apple =>({type: ADD_APPLE});

export const removeApple = apple =>({type: REMOVE_APPLE});
