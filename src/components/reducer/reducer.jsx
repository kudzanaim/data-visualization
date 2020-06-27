import { POI } from "../actions/action";

export function reducerFunc(state, action) {
  switch (action.type) {
      
      case POI:
         
          return { ...state, data: {poi: action.payload.data} }

      default:
          return state;
  }
}