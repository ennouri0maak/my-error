import { INCREMENT, DECREMENT, RESET } from "./actionTypes";


export function incrementAction() {
  return {
    type: INCREMENT
  };
}

export function decrementAction() {
  return {
    type: DECREMENT
  };
}

export function resetAction() {
  return {
    type: RESET
  };
}
